/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package mz.djm.sflow.fe.core;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author Danilo Jo
 * @param <T>
 * @param <ID>
 */
public abstract interface IGenericDAO<T,ID extends Serializable>{ 
    List<T> list();
    T delete(ID id);
    T find(ID id);
    T save(T entity);
    Long countAll();
    Long getLastId();
    
}
