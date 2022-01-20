if(window.XMLHttpRequest)
{
    xhttp=new XMLHttpRequest();
}
else{
    xhttp=new ActiveXObject("Microsoft.XMLHTTP")
}

xhttp.open("GET","file1.xml",false);
xhttp.send();
var xmlDoc=xhttp.responseXML;
console.log(xmlDoc);

function display() {

    var i;
    var table =
        `<thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Team</th>
            <th>Address</th>
        </tr>
        </thead>`;
        
    var x = xmlDoc.getElementsByTagName("Employee");
     // Start to fetch the data by using TagName 
     for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ID")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Contact")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Email")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Salary")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Designation")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Team")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Address")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td></tr>`;

     }
     document.getElementById("myId").innerHTML = table;
}


function remove(node){
    y=xmlDoc.getElementsByTagName("Employee")[node];
    xmlDoc.documentElement.removeChild(y);
    show(xmlDoc);
    console.log(y);
}

function show(xmlDoc){
    var i;
    var table =
    `<thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Team</th>
            <th>Address</th>
        </tr>
        </thead>`;
        
    var x = xmlDoc.getElementsByTagName("Employee");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ID")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Contact")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Email")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Salary")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Designation")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Team")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Address")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("myId").innerHTML = table;
}

function remove(node){
    y=xmlDoc.getElementsByTagName(node)[0];
    xmlDoc.documentElement.removeChild(y);
    // xmlDoc.documentElement.removeChild(y);
    show(xmlDoc);
    console.log(y);
}


function add(){
    var E_ID=document.getElementById('ID').value;
    var E_Name=document.getElementById('Name').value;
    var E_Contact=document.getElementById('Contact').value;
    var E_Email=document.getElementById('Email').value;
    var E_Salary=document.getElementById('Salary').value;
    var E_Designation=document.getElementById('Designation').value;
    var E_Team=document.getElementById('Team').value;
    var E_Address=document.getElementById('Address').value;

    var Employee = xmlDoc.createElement('Employee');

    var ID = xmlDoc.createElement('ID');
    newText1=xmlDoc.createTextNode(E_ID);
    ID.appendChild(newText1);

    var Name = xmlDoc.createElement('Name');
    newText2=xmlDoc.createTextNode(E_Name);
    Name.appendChild(newText2);

    var Contact = xmlDoc.createElement('Contact');
    newText3=xmlDoc.createTextNode(E_Contact);
    Contact.appendChild(newText3);

    var Email = xmlDoc.createElement('Email');
    newText4=xmlDoc.createTextNode(E_Email);
    Email.appendChild(newText4);

    var Salary = xmlDoc.createElement('Salary');
    newText5=xmlDoc.createTextNode(E_Salary);
    Salary.appendChild(newText5);

    var Designation = xmlDoc.createElement('Designation');
    newText6=xmlDoc.createTextNode(E_Designation);
    Designation.appendChild(newText6);

    var Team = xmlDoc.createElement('Team');
    newText7=xmlDoc.createTextNode(E_Team);
    Team.appendChild(newText7);

    var Address = xmlDoc.createElement('Address');
    newText8=xmlDoc.createTextNode(E_Address);
    Address.appendChild(newText8);

    Employee.appendChild(ID);
    Employee.appendChild(Name);
    Employee.appendChild(Contact);
    Employee.appendChild(Email);
    Employee.appendChild(Salary);
    Employee.appendChild(Designation);
    Employee.appendChild(Team);
    Employee.appendChild(Address);


    var y = xmlDoc.getElementsByTagName("EmpDetails");
    y[0].appendChild(Employee);

    console.log(y);

    show(xmlDoc);
    $('#new').modal('hide')
}

function formAdd(){
   var x=document.getElementById('form');
    if(x.style.visibility=="visible")
    x.style.visibility="hidden";
    else
    x.style.visibility="visible";
}