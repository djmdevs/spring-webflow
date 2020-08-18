package mz.djm.sflow.fe.core;

import java.lang.reflect.ParameterizedType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class AuditLogger<T> implements ILogger<T> {

	private Class<T> clazz;
	protected Logger logger;
		
	@SuppressWarnings("unchecked")
	public Class<T> getClazz() {
		
		return this.clazz = (Class<T>) ((ParameterizedType) getClass()
                .getGenericSuperclass())
				.getActualTypeArguments()[0];
	}
	
	/**
	 * This contract, Define a generic Logger
	 * 
	 * @return a Logger object
	 */
	public Logger getLogger() {		
		return logger = LoggerFactory.getLogger(getClazz());
	}
}
