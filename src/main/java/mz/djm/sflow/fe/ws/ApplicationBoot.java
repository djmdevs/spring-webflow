package mz.djm.sflow.fe.ws;

/**
 * 
 * @author Danilo Jo
 * 
 *uc_012 - Class used in test types enviroments
 *
 */

//@SpringBootApplication
public class ApplicationBoot {

	public static void main(String[] args) {
		
		//gettiing context from system property
		System.setProperty("server.servlet.contextPath", "/j2web/dev-env");
		//SpringApplication.run(Application.class, args);
	}
}
