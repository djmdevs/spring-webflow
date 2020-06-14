<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
            <form  action="${pageContext.request.contextPath}/Ticket/postList.do"  commandName="" method="post">
                
                <fieldset><legend>Procurar-Passe</legend>
                    <table border="0px">
                       <tr>
                            <%-- List of Routes for selection--%>
                            <td>
                                <select name="filter" id="filterId" style="width: 430px;">
                                    <option value="0"><c:out value="<<Selecione o numbero de telefone>>"/></option>
                                    <c:forEach var="ticket" items="${ticketObjects}"> 
                                        <option  value="${ticket.recieverPhoneNumber}">${ticket.recieverPhoneNumber}</option>
                                    </c:forEach>
                                </select>
                            </td>
                        </tr>
                                           
                        <tr>
                            <td><button type="submit" style="color: #39F">submeter</button></td>
                        </tr>
                        
                        </table>
                            
                            <!--Table List-->
                             <div class="data" style="margin-top:10px;overflow:auto;height: 200px ;margin-left: 15px;border:0px solid">
                                                       
                                                        
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
                                                                 
                                                                    <c:forEach items="${filteredTickets}" var="ticket">
                                                                    <tr>
                                                                        <td style="text-align: justify"><b>${ticket.serialNumber}</b></td>
                                                                        <td style="text-align: justify">${ticket.rota.descricao}</td>
                                                                        <td style="text-align: justify;font-weight:bold;">${ticket.tarifa}</td>
                                                                        <td style="text-align: justify">${ticket.servicoPagamento}</td>
                                                                        <td style="text-align: justify" > <a href="#" alt="XXXX"><img src=${ticket.qrcodePath}/></a></td>
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