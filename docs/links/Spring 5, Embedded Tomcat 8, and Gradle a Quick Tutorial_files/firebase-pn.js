function getBrowserName() {
  var userAgent = navigator.userAgent;
  var browserName = (userAgent.match(/opera|chrome|safari|firefox/i) || [])[0];
  var appName = navigator.appName;

  if (appName === "Microsoft Internet Explorer") {
    browserName = "IE";
    return browserName;
  }

  if (navigator.appVersion.indexOf("Edge") > -1) {
    browserName = "Edge";
    return browserName;
  }

  if (browserName === "Chrome") {
    var opr = userAgent.match(/\bOPR/i);
    if (opr !== null) {
      browserName = "Opera";
      return browserName;
    }

    return browserName;
  } else {
    return browserName;
  }
}

const browser = getBrowserName();
const PN_COOKIENAME = 'auth0Blog_pn';

firebase.initializeApp({
  messagingSenderId: "480881558079"
});

// metrics
function track(data) {
	metricsLib.track("blog:notifications:" + browser, {
		trackData: data
	});
}

const messaging = firebase.messaging();
const pathUrl = (/^\/blog\/$/.exec(window.location.pathname)) ? './frb-sw.js' : './../frb-sw.js';

// serviceWorker register
window.addEventListener('load', function () {
	if ('serviceWorker' in navigator ) {
		navigator.serviceWorker.register(pathUrl)
			.then(function (registration){
				messaging.useServiceWorker(registration);
			}).then(initialSetup);
	} else {
		console.warn('Service workers aren\'t supported in this browser.');
	}
});

function initialSetup() {
	if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
		console.warn('Notifications aren\'t supported.');
		return;
	}

	if (Notification.permission === 'denied') {
		console.warn('The user has blocked notifications.');
		return;
	}

	if (!('PushManager' in window)) {
		console.warn('Push messaging isn\'t supported.');
		return;
	}

	navigator.serviceWorker.ready
		.then(function (serviceWorkerRegistration) {
			serviceWorkerRegistration.pushManager.getSubscription()
				.then(function (subscription) {
					if (!subscription && cookieValidate()) {
						return openPopup();
					}
				})
				.catch(function (e) {
					console.warn('Error during getSubscription()', e);
				});
		});
}

function cookieValidate() {
	if (Cookies.get(PN_COOKIENAME)){
		return Cookies.get(PN_COOKIENAME) === 'true';
	}
	return true;
}

function setCookie(param) {
	return Cookies.set(PN_COOKIENAME, param, { expires: 3650 });
}

function unsubscribe() {
	navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
		serviceWorkerRegistration.pushManager.getSubscription().then(
			function (pushSubscription) {
				pushSubscription.unsubscribe().catch(function (e) {
					console.error('Error thrown while unsbscribing from push messaging.', e);
				});
			});
	});
}

function requestSubscribe() {
	return navigator.serviceWorker.ready.then(function (
		serviceWorkerRegistration
	) {
		serviceWorkerRegistration.pushManager
			.getSubscription()
			.then(function (pushSubscription) {
				if (pushSubscription) {
					return pushSubscription;
				}
				return serviceWorkerRegistration.pushManager.subscribe(
					{ userVisibleOnly: true }
				).then(function (subscription) {
					return messaging.requestPermission().then(function () {
						return subscription
					})
				});
			})
			.then(function (pushSubscription) {
				subscribe(pushSubscription);
			});
	});
}

// send subscription id to server
function subscribe() {
	messaging
		.getToken()
		.then(function(token) {
			if (token) {				
				sendTokenToServer(token).then(function (response) {
					if (response.ok) {
						setCookie(true);
						track('accepted');
					}
				}).catch(function (err) {
					console.log(err);
					unsubscribe();
				});
			} else {
				unsubscribe();
			}
		})
		.catch(function(err) {
			console.log("An error occurred while retrieving token. ", err);
			unsubscribe();
		});
}

function sendTokenToServer(id) {
		return fetch(
			"https://push-notification-sender.herokuapp.com/blog",
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				method: "POST",
				body: JSON.stringify({
					fcm_id: id
				})
			}
		)
};

// UI POPUP
function popupVisibility() {
	$(".pn-popup").css({
		position: "fixed",
		"z-index": "1500"
	});
	$(".pn-popup").addClass("pn-is-visible");
	$(".pn-popup-container").css({
		position: "inherit",
	});
}

// delay open popup
function openPopup() {
	return setTimeout(function () {
		if (getBrowserName() !== 'Safari'){ //disable Safari browser
			popupVisibility();
		}
	}, 20000);
}

// popup buttons
$("#push-allow").on("click", function (e) {
	$(".pn-popup").removeClass("pn-is-visible");
	if ("safari" in window && "pushNotification" in window.safari) {
		pnSafari();
	} else {
		requestSubscribe();
	}
});

$("#push-block").on("click", function (e) {
	$(".pn-popup").removeClass("pn-is-visible");
	setCookie(false);
	track('declined');
});


// Handle incoming messages. Called when:
// - a message is received while the app has focus
messaging.onMessage(function (payload) {
	const { notification }  = payload;
	const options = {
		body: notification.body,
		icon: notification.icon,
		data: { link: notification.click_action }
	};
	navigator.serviceWorker.ready.then((reg) => {
		reg.showNotification(notification.title, options);
	});
});


function subscriptionValidationSafari() {
  if ("safari" in window && "pushNotification" in window.safari) {
    if (
			cookieValidate()
    ) {
      valActive = true;
      return openPopup();
    }
  }
};

 function pnSafari() {
  if ("safari" in window && "pushNotification" in window.safari) {
    var permissionData = window.safari.pushNotification.permission(
      "web.com.auth0"
    );
    checkRemotePermission(permissionData);
  }
};

function checkRemotePermission(permissionData) {
  if (permissionData.permission === "default") {
    window.safari.pushNotification.requestPermission(
      "https://safari-web-service.herokuapp.com", // The web service URL.
      "web.com.auth0.website", // The Website Push ID.
      {}, // Data that you choose to send to your server to help you identify the user.
      checkRemotePermission // The callback function.
    );
  } else if (permissionData.permission === "denied") {
    localStorage.setItem("pn-subscription", "false");
    metricsLib.track("blog:notifications:" + browser, {
      trackData: "declined"
    });
  } else if (permissionData.permission === "granted") {
    localStorage.setItem("permissionAllow", "true");
    metricsLib.track("blog:notifications:" + browser, {
      trackData: "accepted"
    });
  }
}
