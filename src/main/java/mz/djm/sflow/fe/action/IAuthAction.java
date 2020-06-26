package mz.djm.sflow.fe.action;

import org.springframework.webflow.execution.RequestContext;

public interface IAuthAction {

	/**
	 * Return a specificy state message (sucessful ou failed)
	 * @param msg
	 * @return
	 */
	public boolean checkAuthorizationState(String msg, RequestContext context);
	
	public String step0(RequestContext context);

}
