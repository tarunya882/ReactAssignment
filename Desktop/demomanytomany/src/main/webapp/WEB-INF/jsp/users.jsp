<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<title> QUIZ </title>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

</head>

<body>

<br><br>
<div class="container">

    <table class="table table-bordered table-striped">
     <thead class="thead-dark">
        <tr>
          <th>User</th>
          <th>Action</th>
        </tr>
         <c:forEach var="temp" items="${users}">
            <tr>

              <td> ${temp.name} </td>
              <td> ${temp.roles} </td>
              <td><a href="deleteUser/${temp.id}" class="btn btn-danger">DeleteUser</a>

                <a href="changeRole/${temp.id}" class="btn btn-info">ChangeRole</a>

              </td>
            </tr>
         </c:forEach>
     </thead>
    </table>
</div>
</body>
</html>