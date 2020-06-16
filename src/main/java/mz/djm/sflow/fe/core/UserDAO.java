/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mz.djm.sflow.fe.core;

import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import mz.djm.sflow.fe.entity.UserEntity;

/**
 *
 * @author Danilo Jo
 */

@Repository
public class UserDAO  extends GenericDAO<UserEntity, Long> implements IUserDAO{

    public UserDAO(HibernateTemplate htemplate) {
        super(htemplate);
    }

}
