<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

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
            <form  action="${pageContext.request.contextPath}/Ticket/reload.do"  commandName="" method="post">
                <fieldset><legend>Detalhe-Passe</legend>
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
                            <td>TicketID</td>
                             <%-- ID+SerialNumber--%>
                             <td>
                                  <select name="tid" id="catId" style="width: 430px;">
                                    <option value="0"><c:out value="<<Selecione>>"/></option>
                                    <c:forEach var="ticket" items="${ticketList}"> 
                                         <option  value="${ticket.serialNumber}">${ticket.recieverPhoneNumber} - ${ticket.serialNumber}</option></option>
                                    </c:forEach>
                                </select>
                             </td>
                        </tr>
                        

                                              
                      
                        <tr>
                            <td rowspan="1">Categoria Tarifaria</td>
                            <%--selecting categories--%>
                            <td>
                                <select name="tarifa" id="catId" style="width: 430px;">
                                    <option value="0"><c:out value="<<Selecione>>"/></option>
                                    <option value="${category}">Diaria</option>
                                    <option value="${category}">Semanal</option>
                                    <option value="${category}">Mensal</option>
                                  
                                        
                                   
                                </select>
                            </td>
                        </tr>
                         <tr>
                            <td>Meio de Pagamento</td>
                            <%--Set route values inside database--%>
                            <%--selecting categories--%>
                            <td>
                                <select name="mPagamento" id="catId" style="width: 430px;">
                                    <option value="0"><c:out value="<<Selecione>>"/></option>
                                    <option value="${category}">M-pesa</option>
                                    <option value="${category}">M-kesh</option>
                                    <option value="${category}">e-Mola</option>                                    
                                   
                                </select>
                            </td>

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