<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" isELIgnored="false" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0014)about:internet -->
<style type="text/css">
    /*    td img {display: block;}*/

    /*ids;*/
    #div-login{
        border:0px solid;
        /*background;*/
        background-repeat: no-repeat;
        height: 500px;
        width: 510px;
        margin-left: 30%;
       }

    .table-login{
        margin-left: 125px;
        padding-top: 166px;
    }
    /*classes;*/
    .left-td-definition{
        text-align: right;
    }


</style>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Portal-Login</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>
    <body >
        <form:form name="form-login" action="userAuthority.do" method="POST">
            <div id="div-login">
                <table class="table-login">
                    
                    <tr>
                        <th>
                            <img src="../img/logo-eTck.png" style="width: 300px; height: 100px"/>
                            <br/>
                        </th>
                    </tr>
                    <tr>
                        <td><input type="text" id="j_username" name="j_username"  placeholder="Usuario"  style="width:220px;height:27px"/></td>
                    </tr>
                    <tr>
                        <td><input type="password" id="j_password" name="j_password"  placeholder="Senha" style="width:220px;height:27px"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Login" /></td>
                    </tr>
                   
                    <tr>
                       <td><a href="${pageContext.request.contextPath}/Utente/get.do" >Criar nova conta</a></td>
                    </tr>
                </table>
            </div>
        </form:form> 
    </body>
</html>
