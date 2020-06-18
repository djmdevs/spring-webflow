/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package mz.djm.sflow.fe.core;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO uc
 * @author Danilo Jo
 * @param <T>
 * @param <ID>
 */ 
@Repository
public abstract class AbstractGenericDAO<T, ID extends Serializable> implements IGenericDAO<T, ID> {

       
    private Session session;
    private static Log LOG = LogFactory.getLog(AbstractGenericDAO.class);
    private final Class<T> persistentClass;

    @SuppressWarnings("unchecked")
    public AbstractGenericDAO(HibernateTemplate htemplate) {
        this.persistentClass = (Class<T>) ((ParameterizedType) getClass()
                .getGenericSuperclass()).getActualTypeArguments()[0];
        
        this.session = htemplate.getSessionFactory().openSession();
        
        LOG.warn("Initializing Persistence " + getClass().getName());
//        LOG.warn("Initializing SessionFactory "+sessionFactory.toString());     

    }

    public Class<T> getPersistentClass() {
        return persistentClass;
    }

    @Transactional
    @Override
    public T save(T entity) {
        
       T o = (T) session.merge(entity);
       session.flush();
        return o;
    }

    @Transactional
    @Override
    public List<T> list() {
        return (List<T>) session.createCriteria(this.persistentClass).list();
    }

    @Transactional
    @Override
    public T find(ID id) {
        return (T) session.get(this.persistentClass, id);
    }

    @Transactional
    @Override
    public T delete(ID id) {
        T t = (T) find(id);
        session.delete(t);
        session.flush();
        return (T) t;
    }

    @Transactional
    @Override
    public Long countAll() {
        return ((Long) session.createCriteria(this.persistentClass)
                .setProjection(Projections.count("id"))
                .uniqueResult());
    }
 
    //@Transactional
    //public abstract T saveAt(ID pos,T t);

    @Override
    public Long getLastId() {
           return countAll()+1;
    }


}
