<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page session="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<style type="text/css">


</style>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="../css/estilo.css"/>
        <link rel="stylesheet" type="text/css" href="../css/layout_main.css"/>
        <title>(e-Passe)</title>

    </head>
    <body>
        <div id="todo">
            <div id="topo">
                <div id="logo" style="">
                    <img src="../img/logo-eTck.png" style="height: 50px;"/>
                </div>
            </div>

            <div id="meio" class="bgimg">
                
                Bem vindo, <i style="Bold"><c:out value="${uId.nome}" /></i>

                <div id="menu" style="width: 150px;height:4px">
                    <ul class="listmenu">   <!--Sub Menu cadastro-->

                        <li><a href="#">Passe</a>
                            <ul id="sub-level">
                                <li><a href="${pageContext.request.contextPath}/${contextPathBuyTck}?uId=${uId.contaLogin}"    target="mioloContentor">Vender Passe</a></li>
                                <li><a href="${pageContext.request.contextPath}/${contextPathReloadTck}?uId=${uId.contaLogin}" target="mioloContentor">Recarregar Passe</a></li>
                                <li><a href="${pageContext.request.contextPath}/${contextPathListTck}?uId=${uId.contaLogin}" target="mioloContentor">Listar Passes</a></li>
                            </ul>
                        </li>

                        <li><a href="${pageContext.request.contextPath}/${contextPathLogout}">Sair</a></li>
                    </ul>

                </div>
                <div id="miolo">
                    <iframe name="mioloContentor" id="contFrame" >
                        
                    </iframe>
                </div>

                <div style="clear: both;"></div>
            </div>

            <div id="rodape">
                Todos Direitos Reservados ${dataCorrente}
            </div>

        </div>
    </body>
</html>
