<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<style type="text/css">
    
    .form-item { margin: 20px 0px; }
    .form-label { font-weight: bold; }
    .form-error-field { background-color: #FFC; }

    .form-error-message 
    { 
        font-weight: bold; color: #900;
        background-color: #FFC;
    }
    
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, input {
        font-size: 100%;
    }

    body {
        font-family: sans-serif;
        font-size:12px;
    }

    legend{
        color: #FFC;
        font-weight: bold;
        background-color: #363;
    }

    #message{
        font-weight: bold; 
        color: #363;
        background-color: #FFC;
    }
    
    #message2{
        font-weight: bold; 
        color: red;
        background-color: #FFC;
    }
    
</style>
<html>
    <head xmlns="http://www.w3.org/1999/xhtml">
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta http-equiv="expires" content="-1" />
        <meta http-equiv="pragma" content="no-cache" />
        <link rel="stylesheet" type="text/css" href="../css/struture.css">
        <title>Ticket</title>
    </head>
    <body>
        <div id="form" style="margin-top:-5px;">
            <form  action="${pageContext.request.contextPath}/Utente/newUser.do"  commandName="automovel" method="POST">
                <fieldset><legend>Detalhe-Utente</legend>
                    <table border="0px">
                        <tr>
                            <td height="" colspan="2">
                                <c:if test="${!empty message}">
                                    <div style="float: left">
                                        <img src="${pageContext.request.contextPath}/${image}" height="15px"/>
                                    </div>
                                    <div align="left" id="message" style="margin-top: 3px;width:800px">
                                        &nbsp;${message}
                                    </div> 
                                </c:if>
                                <c:if test="${!empty message2}">
                                    <div style="float: left">
                                        <img src="${pageContext.request.contextPath}/${image}" height="15px"/>
                                    </div>
                                    <div align="left" id="message2" style="margin-top: 3px;width:800px">
                                        &nbsp;${message2}
                                    </div> 
                                </c:if>

                            </td>
                        </tr>
                        <tr>
                            <td>ID</td>
                             <%-- ID+SerialNumber--%>
                            <td><input type="text"  readonly value="${uId}"/></td>
                        </tr>
                        

                        <tr>
                            <td>Nome Apelido</td>  
                            <%-- List of Routes for selection--%>
                            <td><input type="text"  name="nome" value="${a.nome}"/></td>
                        </tr>
                                             
                        <tr>
                            <td>Conta de Login</td>  
                            <%-- List of Routes for selection--%>
                            <td><input type="text"  name="login" value="${a.nome}"/></td>
                        </tr>
                        
                         <tr>
                            <td>Contacto</td>
                            <td><input type="text" name="contacto" value="${a.contacto}"/></td>
                        </tr>
                        
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" value="${a.contacto}"/></td>
                        </tr>
                        
                        <tr>
                            <td>Confirmar Password</td>
                            <td><input type="password" name="re-password" value="${a.password}"/></td>
                        </tr>
                       
                        <tr>
                            <td>&nbsp;</td>
                            <td><button type="submit" style="color: #39F">submeter</button></td>
                        </tr>
                        </table>
                        </fieldset>
            </form>
        </div>
    </body>
</html>