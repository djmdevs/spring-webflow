package mz.djm.sflow.fe.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import mz.djm.sflow.fe.core.UserDAO;

/**
 * 
 * @author Danilo Jo
 *
 */

@Controller
@RequestMapping("/Authentication")
public class AuthenticationController {

	private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String doGet(ModelMap map) {

		// degub mode
		logger.debug("PortalAuthentication Request");

		// sending message to specificy model
		map.addAttribute("msg", "Success Loggin");

		return "login";
	}

	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public String doPost(ModelMap map , HttpServletRequest hsRequest) {


		//message
		String msg =null;
		
		//test user id if exists "UP001"
		String userCode = hsRequest.getParameter("userCode"); 
		
		//find user from DAO
		//UserDAO
		
		//if null 
		logger.error("Authentcation Failed NullPointer", new Exception("Testing"));
		
		
		//redirect user to page if !Null
		
		
		//else redirect to login
		
		
		// degub mode
		logger.debug(msg);

		// sending message to specificy model
		map.addAttribute("welcome", "Bem vindo ao Portal WebFlow");
		
		

		return "login";
	}

}
