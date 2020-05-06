<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="AspNetAngularWebFormsClean._Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>

    <style>
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div ng-app="myapp" ng-cloak>
            <ttable></ttable>
        </div>
    </form>
    <script type="text/javascript" src="Scripts/angular.min.js"></script>
    <script type="text/javascript" src="default.js"></script>
</body>
</html>
