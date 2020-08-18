package mz.djm.sflow.fe.core;

import java.lang.reflect.ParameterizedType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * @author Danilo Jo
 *
 * @param <T> - Class to be logged
 * 
 * Obs: in future change to functional interface
 */
public interface ILogger<T> {

	/**
	 * 
	 * @return An Logger object
	 * 
	 */
	public Logger getLogger();
	/*default Logger getLogger() 
	{	
		//get Template class
		@SuppressWarnings("unchecked")
		Class<T> clazz = (Class<T>) ((ParameterizedType) getClass()
                .getGenericSuperclass()).getActualTypeArguments()[0];
		
		return LoggerFactory.getLogger(clazz);
		
	}*/
}
