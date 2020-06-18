package mz.djm.sflow.fe.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 
 * @author Danilo Jo
 *
 */

@Controller
@RequestMapping("/lgc")
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@RequestMapping(value="/get")
	public String doGet(ModelMap map, Model model) {
		
		//degub mode
		logger.debug("Authentication Successful");
	
		//sending message to specificy model
		model.addAttribute("msg", "Success Loggin");
		
		//ResourceServlet r;
		
		return "login";
	}
	
	@RequestMapping(value="/post", method = RequestMethod.POST)
	public String doPost() {
		
		//error mode
		logger.error("Authentcation Failed NullPointer", new Exception("Testing"));
		
		return "login";
	}
	
	
}
