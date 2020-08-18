package mz.djm.sflow.fe.controller;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class AbstractContractsTest<T> {

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
