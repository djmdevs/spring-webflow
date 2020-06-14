<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt" %>

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
    
     .data th {
        background-color:#363;
        color: #FFF;
        font-weight: bold;
    }
</style>


<script type="text/javascript">

   function activaTarifa(){       
       //get tarifa
       var tarifa =document.getElementById("tarifa");
       var preco  =document.getElementById("preco");
       
       if(tarifa.value==="Diaria")
           preco.value = 50;
       else if (tarifa.value==="Semanal")
           preco.value = 150;
       else
           preco.value=500;
       
       
   }
   
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
            <form  action="${pageContext.request.contextPath}/Ticket/add.do"  commandName="" method="post">
                <fieldset><legend>Detalhe-Passe</legend>
                    <table border="0px">
                        <tr>
                            <td height="" colspan="3">
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
                             <td>
                                 <input type="text"  readonly value="${tckId}"/>
                             </td>
                        </tr>
                        

                        <tr>
                            <td>Operadores</td>  
                            <%-- List of Routes for selection--%>
                            <td>
                                <select name="rota" id="catId" style="width: 430px;" multiple="multiple" >
                                    <%-- <option value="0"><c:out value="<<Selecione>>"/></option>--%>
                                    <c:forEach var="rota" items="${rotas}"> 
                                        <option value="${rota.descricao}">${rota.descricao}</option>
                                    </c:forEach>
                                </select>
                            </td>
                        </tr>

                       
                      
                        <tr>
                            <td rowspan="1" style="font-weight:bold;">Tipo de Passe</td>
                            <%--selecting categories--%>
                            <td>
                                <select name="tarifa" id="tarifa" style="width: 430px;" onclick="activaTarifa()">
                                    <option value="tarifa"><c:out value="<<Selecione>>"/></option>
                                    <option value="Diaria">Diaria</option>
                                    <option value="Semanal">Semanal</option>
                                    <option value="Mensal">Mensal</option> 
                                </select>
                            </td>
                        </tr>
                        
                         <tr>
                            <td>Preço</td>
                            <%--Set route values inside database--%>
                            <td><input type="text" id="preco" name="preco" value=""/></td>
                        </tr>
                        
                        <tr>
                            <td>Meio de Pagamento</td>
                            <%--Set route values inside database--%>
                            <%--selecting categories--%>
                            <td>
                                <select name="meioPagamento" id="catId" style="width: 430px;">
                                    <option value="0"><c:out value="<<Selecione>>"/></option>
                                    <option value="M-pesa">M-pesa</option>
                                    <option value="M-kesh">M-kesh</option>
                                    <option value="e-Mola">e-Mola</option>                                    
                                </select>
                            </td>
                           </tr>
                        
                        <tr>
                            <td>&nbsp;</td>
                            <td><input  placeholder="Contacto" type="text" id="contacto" name="contacto" /></td>
                        </tr>
                            
                        <tr>
                            <td>&nbsp;</td>
                            <td><input  placeholder="email" type="hidden" id="recipiente" name="rpc" value="dannilojo@gmail.com"/></td>
                        </tr>
                        
                        
                        
                        <tr>
                            <td>&nbsp;</td>
                            <td><button type="submit" style="color: #39F">submeter</button></td>
                        </tr>
                        
                        </table>
                            
                            <!--Table List-->
                             <div class="data" style="margin-top:10px;overflow:auto;height: 200px ;margin-left: 15px;border:0px solid;display: none">
                                                       
                                                        
                                                                <table border="0px"  id="table-documentlist" style="text-align: center;">
                                                                    <tr>
                                                                        
                                                                        <th>ID</th>
                                                                        <th>Operadores</th>
                                                                        <th style="font-weight:bold;">Tarifa</th>
                                                                        <th>Meio de Pagamento</th>
                                                                        <th>Confirmacao de Pagamento</th>
                                                                        <th>Validade de bilhete</th>
                                                                    </tr>
                                                                    <!--RUN -->
                                                                 
                                                                    <c:forEach items="${ticketList}" var="ticket">
                                                                    <tr>
                                                                        <td style="text-align: justify"><b>${ticket.serialNumber}</b></td>
                                                                        <td style="text-align: justify">${ticket.rota.descricao}</td>
                                                                        <td style="text-align: justify;font-weight:bold;">${ticket.tarifa}</td>
                                                                        <td style="text-align: justify">${ticket.servicoPagamento}</td>
                                                                        <td style="text-align: justify"> <img src=${ticket.qrcodePath} /></td>
                                                                        <%--<td><fmt:formatDate pattern="dd-MM-yyyy" value="${ticket.time}"/></td>-->
                                                                         --%>
                                                                        <td>${ticket.time}</td>
                                                   
                                                                    </tr>
                                                                    </c:forEach>
                                                                </table>
                                                            
                                                    </div>
                        </fieldset>
            </form>
        </div>
    </body>
</html>