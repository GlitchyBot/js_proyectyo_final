$(document).ready(function(){
  		$('.pagoVisa').click(function(){
  		$('.pagoVisa').css('border','2px solid #2195f3');	
  		$('.pagoMastercard').css('border','1px solid #d7d7d7');	
  		$('.pagoNaranja').css('border','1px solid #d7d7d7');
  		$('.pagoEfectivo').css('border','1px solid #d7d7d7');
  		});
  	});
  	$(document).ready(function(){
  		$('.pagoMastercard').click(function(){
  		$('.pagoMastercard').css('border','2px solid #2195f3');
  		$('.pagoVisa').css('border','1px solid #d7d7d7');
  		$('.pagoNaranja').css('border','1px solid #d7d7d7');
  		$('.pagoEfectivo').css('border','1px solid #d7d7d7');		
  		});
  	});
  	$(document).ready(function(){
  		$('.pagoNaranja').click(function(){
  		$('.pagoNaranja').css('border','2px solid #2195f3');
  		$('.pagoVisa').css('border','1px solid #d7d7d7');	
  		$('.pagoMastercard').css('border','1px solid #d7d7d7');	
  		$('.pagoEfectivo').css('border','1px solid #d7d7d7');	
  		});
  	});
  	$(document).ready(function(){
  		$('.pagoEfectivo').click(function(){
  		$('.pagoEfectivo').css('border','2px solid #2195f3');
  		$('.pagoVisa').css('border','1px solid #d7d7d7');	
  		$('.pagoMastercard').css('border','1px solid #d7d7d7');
  		$('.pagoNaranja').css('border','1px solid #d7d7d7');		
  		});
      });
      
      window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 120) {
    document.getElementById("menu").className = "scrollEventAddClass";
  } else {
    document.getElementById("menu").className = "";
  }
}

function openLogin(){
        document.getElementById("menuLogin").style.display = 'block';
        document.getElementById("menuRegistro").style.display = 'none';
    }
  function openSignup(){
        document.getElementById("menuLogin").style.display = 'none';
        document.getElementById("menuRegistro").style.display = 'block';
    }


    $(document).ready(function(){
      
      $('#menuCuenta').on('click',function(){
        $('.menuDesp').toggleClass('showMenuCuenta');
      });

      
    });



    function checkout(){
    	document.getElementById("formularioPago").style.display = 'block';
    	document.getElementById("miCarrito").style.display = 'none';
    }
var metodoPago;
    function visa(){
     metodoPago = "Visa";
    }
    function mastercard(){
     metodoPago = "Mastercard";
    }
     function naranja(){
     metodoPago = "Naranja";
    }
     function efectivo(){
     metodoPago = "Efectivo";
    }


    function webManagement(){
    	document.getElementById("listadoProductos").style.display = 'none';
    document.getElementById("gestionProductos").style.display = 'block';
    	
    }
 	
 	function homePage(){
 		document.getElementById("listadoProductos").style.display = 'block';
    document.getElementById("gestionProductos").style.display = 'none';
    listProducts();
     }
     
     var id_order_food =JSON.parse(localStorage.getItem('id_order_food'));
if (id_order_food === null) {
        id_order_food = [];
        var id_order_food =0;
        localStorage.setItem("id_order_food", JSON.stringify(id_order_food));
    }


var commentCustomer =JSON.parse(localStorage.getItem('commentCustomer'));
if (commentCustomer === null) {
        commentCustomer = [];
        var commentCustomer =[{}];
        localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
    }



var paymentId =JSON.parse(localStorage.getItem('paymentId'));
if (paymentId === null) {
        paymentId = [];
        var paymentId = 0;
        localStorage.setItem("paymentId", JSON.stringify(paymentId));
    }





var idup =JSON.parse(localStorage.getItem('idup'));
if (idup === null) {
        idup = [];
        var idup=3;
         localStorage.setItem("idup", JSON.stringify(idup));
    }



var CheckInfo =JSON.parse(localStorage.getItem('CheckInfo'));
if (CheckInfo === null) {
        CheckInfo = [];
        var CheckInfo = 0;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    }

var food =JSON.parse(localStorage.getItem('food'));
if (food === null) {
        food = [];
    }





var account =JSON.parse(localStorage.getItem('account'));
if (account === null) {
        account = [];
        var account = [{
    id:0,
    username:"admin",
    password:"123456",
    level:1  
},{
    id:1,
    username:"b",
    password:"b",
    level:0 
},{
    id:2,
    username:"a",
    password:"a",
    level:0 
}];
localStorage.setItem("account", JSON.stringify(account));
    }
var food =JSON.parse(localStorage.getItem('food'));
if (food === null) {
        food = [];
        food = [{
    id:0,
    name:"Cannelés",
    price:"75",
    note:"Masa de vainilla y un toque de ron dentro de un pequeño sobre caramelizado.",
    image:"image/cannele.jpeg"
},{
    id:1,
    name:"Éclairs",
    price:"185",
    note:"Masa choux rellena de una crema aromatizada y dulce.",
    image:"image/eclair.jpeg"
},{
    id:2,
    name:"Croissants",
    price:"220",
    note:"Croissants franceses elaborados con manteca.",
    image:"image/croissant.jpeg"
},{
    id:3,
    name:"Macaroons",
    price:"90",
    note:"Dos galletitas de almendras rellenas con ganache aromatizado o mermelada.",
    image:"image/macaroons.jpeg"
},{
    id:4,
    name:"Financiers",
    price:"110",
    note:"Los financiers son un pastelito suave y esponjoso con sabor a almendras.",
    image:"image/financiers.jpeg"
},{
    id:5,
    name:"Crepes",
    price:"180",
    note:"Los crepes pueden ser tanto salados como dulces.",
    image:"image/crepes.jpeg"
},{
    id:6,
    name:"Madeleine",
    price:"130",
    note:"Madeleines son una especie de pastelito hecho con huevos y manteca.",
    image:"image/madeleine.jpeg"
},{
    id:7,
    name:"Crème Brûlée",
    price:"280",
    note:"Crème Brûlée es una pasta elaborada con yema de huevo, vainilla, nata y caramelo.",
    image:"image/cremebrule.jpeg"
}];
        localStorage.setItem("food", JSON.stringify(food)); 
    }


var orderFood =JSON.parse(localStorage.getItem('orderFood'));

if (orderFood === null) {
        orderFood = [{}];
        localStorage.setItem("orderFood", JSON.stringify(orderFood));
    }





var accountInfo =JSON.parse(localStorage.getItem('accountInfo'));
if (accountInfo === null) {
        accountInfo = [];
        var accountInfo=[{}];
        localStorage.setItem("accountInfo", JSON.stringify(accountInfo));
    }





var checkLogin =JSON.parse(localStorage.getItem('checkLogin')); 
if (checkLogin === null) {
        checkLogin = [];
        var checkLogin = -1;
        localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
    }
if (checkLogin == -1) {
	
}else if( account[checkLogin].level==0){

	document.getElementById("estadoLogin").innerHTML="Por favor, inicie sesión";
    document.getElementById("menuCuenta").innerHTML = account[checkLogin].username;
        document.getElementById("menuCuenta").style.display = 'block';
        document.getElementById("botonLogin").style.display = 'none';
        document.getElementById("holaUsuario").innerHTML ="Hola "+account[checkLogin].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("botonGestionar").style.display = 'none';
        createOrder();
       demOrder();
}else if( account[checkLogin].level==1){
  document.getElementById("estadoLogin").innerHTML="Por favor, inicie sesión";
        document.getElementById("menuCuenta").innerHTML = account[checkLogin].username;
        document.getElementById("menuCuenta").style.display = 'block';
        document.getElementById("botonLogin").style.display = 'none';
        document.getElementById("holaUsuario").innerHTML ="Hola, "+account[checkLogin].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("botonGestionar").style.display = 'block';
        createOrder(); 
        demOrder();  
  
}



var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
if (paymentFood === null) {
        paymentFood = [];
        var paymentFood=[{}];
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
    }
console.log(account);





function Signup(){
  var checkUsername = 0;
    var id=idup;
    var level=0;
    var username = document.getElementById('registroUsuario').value;
    var password = document.getElementById('passwordSignup').value; 
    var Repassword = document.getElementById('confRegistroPassword').value;
    if (username != '' && password !='' && Repassword !='' && password == Repassword) {
      for(let i = 0; i < account.length; i++) {
        if (account[i].username== username) {
          
         
           checkUsername = 1;
            break;
        }
      } 
        if (checkUsername == 0) {
    accountSignup = {id,username,password,level};
    account.push(accountSignup);

    localStorage.setItem("account", JSON.stringify(account));

    checkLogin = id;
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

    var id=idup++;
    localStorage.setItem("idup", JSON.stringify(idup));
    console.log(account); 
    document.getElementById("estadoRegistro").innerHTML="Registro exitoso";
    document.getElementById("menuCuenta").innerHTML = username;
        document.getElementById("menuCuenta").style.display = 'block';
        document.getElementById("botonLogin").style.display = 'none';
        document.getElementById("holaUsuario").innerHTML ="Hola, "+username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        location.reload();
}else { 
  document.getElementById("estadoRegistro").innerHTML="Esta cuenta ya existe";
}
}else {
  document.getElementById("estadoRegistro").innerHTML="Por favor complete todas als casillas";
}
}

function Login(){ 
  for (i = 0; i< account.length; i++){
    if ((document.getElementById("usuarioLogin").value == account[i].username) && (document.getElementById("passwordLogin").value == account[i].password)) {
      checkLogin = account[i].id; 
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin)); 
       
      if (account[i].level==0) {
        document.getElementById("estadoLogin").innerHTML="Inicio de sesión exitoso";
        document.getElementById("menuCuenta").innerHTML = account[i].username;
        document.getElementById("menuCuenta").style.display = 'block';
        document.getElementById("botonLogin").style.display = 'none';
        document.getElementById("holaUsuario").innerHTML ="Hola,"+account[i].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("botonGestionar").style.display = 'none';
        createOrder();
       demOrder();
      
       location.reload();
        
      }else if(account[i].level==1){
        document.getElementById("estadoLogin").innerHTML="Inicio de sesión exitoso";
        document.getElementById("menuCuenta").innerHTML = account[i].username;
        document.getElementById("menuCuenta").style.display = 'block';
        document.getElementById("botonLogin").style.display = 'none';
        document.getElementById("holaUsuario").innerHTML ="Bienvenido "+account[i].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("botonGestionar").style.display = 'block';
        createOrder(); 
        demOrder();  
        location.reload();           
      }     
    }
}
if (checkLogin == -1) {
  document.getElementById("estadoLogin").innerHTML="Contraseña o usuario incorrecto";

    }
}

function deleteOrder(id_order){
  for(var i = 0; i < orderFood.length; i++){
        if(id_order == orderFood[i].id_order && checkLogin == orderFood[i].userIdOrder) {
            orderFood.splice(i, 1);
            localStorage.setItem("orderFood", JSON.stringify(orderFood));
            createOrder(); 
            demOrder();
            break;          
        }
    }
}

function totalAmount(checkLogin){
  var total_order =0;
  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].userIdOrder){
      total_order += orderFood[i].priceOrder*orderFood[i].quantityOrder;
        
    }

  }
  document.getElementById("importeTotal").innerHTML ="AR$"+ total_order;
        
}

function addQuantity(id_order){
  var ok=0;
  for(let i = 0; i < orderFood.length; i++) {
    if (id_order == orderFood[i].id_order && checkLogin == orderFood[i].userIdOrder) {
       var entradaCant =document.getElementById('entradaCant'+i).value;
      orderFood[i].quantityOrder=entradaCant;
       ok += orderFood[i].priceOrder *orderFood[i].quantityOrder;
       localStorage.setItem("orderFood", JSON.stringify(orderFood));
       createOrder();
    }
  }   
}
document.getElementById("nombreCliente").value = account[checkLogin].username;
document.getElementById("telefonoCliente").value = accountInfo[checkLogin].telefonoCliente;
document.getElementById("direccionCliente").value = accountInfo[checkLogin].direccionCliente;
  for(let i = 0; i < orderFood.length; i++) {
 if (accountInfo[i].accountPayment==account[checkLogin].id) {
  CheckInfo = 1;
   localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
 }else {
   CheckInfo = 0;
   localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
 }
}


function payment(){
  var paymentId =JSON.parse(localStorage.getItem('paymentId'));
	var nombreCliente = document.getElementById("nombreCliente").value;  
	var telefonoCliente = document.getElementById("telefonoCliente").value;
	var direccionCliente = document.getElementById("direccionCliente").value;  
  var status = "A confirmar";
      var priceTotal=0;
      payFormPush();
      for(let i = 0; i < orderFood.length; i++) {
        if (orderFood[i].userIdOrder==checkLogin) {
          priceTotal +=orderFood[i].priceOrder*orderFood[i].quantityOrder;
          quanlityPayment = orderFood[i].quantityOrder;
          
        }
      }
      accountPayment = account[checkLogin].id;
      paymentarr={paymentId,accountPayment,showDetailOrder,quanlityPayment,priceTotal,nombreCliente,telefonoCliente,direccionCliente,metodoPago,status};
      paymentFood.push(paymentarr);
      localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
      paymentId++;
      localStorage.setItem("paymentId", JSON.stringify(paymentId));
      var CheckInfo =JSON.parse(localStorage.getItem('CheckInfo'));
      if (CheckInfo == 0) {
        accountInfo_arr ={accountPayment,nombreCliente,telefonoCliente,direccionCliente,metodoPago};
      accountInfo.push(accountInfo_arr);
      localStorage.setItem("accountInfo", JSON.stringify(accountInfo));
      CheckInfo = 1;
      localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
     console.log(paymentFood);
        
      }
      for(let i = 0; i < orderFood.length; i++) {
        if (checkLogin == orderFood[i].userIdOrder) {
          orderFood.splice(i, 5);
          localStorage.setItem("orderFood", JSON.stringify(orderFood));
          location.reload(); 
        }
      }
      
}

function createOrder(){
	document.getElementById("prinf_order").innerHTML ='';
	for(let i = 0; i < paymentFood.length; i++) {
        if (paymentFood[i].accountPayment==checkLogin) {      	
        	document.getElementById("prinf_order").innerHTML +=paymentFood[i].showDetailOrder;


    }
}
}
function checkOrder(id){
 if (checkLogin == -1) {
    Swal.fire(
  'Por favor, inicie sesion',
  'Tenes que iniciar sesion para pdoer agregar productos a tu carrito',
  'warning'
);
  }else {
    
  
  for(let i = 0; i < orderFood.length; i++) {
    var checkordervalue=0;

      if (id == orderFood[i].foodId && checkLogin == orderFood[i].userIdOrder) {
        
        checkordervalue=1;
        orderFood[i].quantityOrder++;

       orderFood[i].quantityOrder;
       localStorage.setItem("orderFood", JSON.stringify(orderFood));
        createOrder();
        
      }
      
}if (checkordervalue==0) {
  pushOrder(id);
  createOrder();

  }}
 } 



function pushOrder(id){
var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
  id_order = id_order_food;
  var nameOrder = food[id].name;
  var priceOrder = food[id].price;
  var imageOrder = food[id].image;
  var noteOrder = food[id].note;
  var quantityOrder = 1;
  var userIdOrder = checkLogin;
  var foodId = id;
  foodOrder = {id_order,nameOrder,priceOrder,imageOrder,noteOrder,quantityOrder,userIdOrder,foodId};
  orderFood.push(foodOrder);

 localStorage.setItem("orderFood", JSON.stringify(orderFood));

  console.log(foodOrder);
  id_order_food++;
  localStorage.setItem("id_order_food", JSON.stringify(id_order_food));
  demOrder();
  
	
  createOrder();

   console.log(orderFood);

  }

  function demOrder(){
    var demOrder=0;
  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].userIdOrder)
       demOrder++;
      document.getElementById("productosCarrito").innerHTML =demOrder;

  }
  }

  function createOrder(){
    document.getElementById("tablaCarrito").innerHTML ='';
	var orderFood =JSON.parse(localStorage.getItem('orderFood'));
totalAmount(checkLogin);
  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].userIdOrder) {
    var tablaCarrito = `<tr>  
      <td><div>
        <div class="imgCarrito float-left">
            <img src="`+orderFood[i].imageOrder+`" width="100%" height="100%">
        </div>
        <div class="infoCarrito float-left pl-3">
            <p class="mb-1 font-weight-bold" style="font-size: 115%;">`+orderFood[i].nameOrder+`</p>
            
        </div>
      </div> </td>
      <td class="text-center"><input id="entradaCant`+i+`" onchange ="addQuantity(`+orderFood[i].id_order+`)" class="cantCarrito mt-2" type="number" value="`+orderFood[i].quantityOrder+`" name="" min="1" max="20" style=""> </td>
      <td class="text-center"><p class="mt-2" style="padding:5px;">AR$ `+orderFood[i].priceOrder *orderFood[i].quantityOrder+`</p></td>
      <td class="text-center"><div onclick="deleteOrder(`+orderFood[i].id_order+`)" class="eliminarCarrito"><i class="fa fa-trash" aria-hidden="true" style="color: #fb9200;font-size: 180%"></i></div> </td>
    </tr>`
    document.getElementById("tablaCarrito").innerHTML +=tablaCarrito;
 
    

    

    
    }

  }

  }




var showDetailOrder;
  function payFormPush(){

    showDetailOrder='';
totalAmount(checkLogin);

  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].userIdOrder) {

    var pushCart = `<div class="imgCarrito float-left mb-2" style="width: 80px;">
            <img src="`+orderFood[i].imageOrder+`" width="100%" height="100%">
        </div>
        <div class="infoCarrito float-left pl-3">
            <p class="mb-1 font-weight-bold" style="font-size: 115%;">`+orderFood[i].nameOrder+`</p>
            <p style="font-size: 85%">`+orderFood[i].noteOrder+`</p>
        </div>
        <div class="quanlity" style="float: right;width: 30px;height: 30px;">
          <p>`+orderFood[i].quantityOrder+`</p>
        </div><div style="clear:both;"></div>`
    showDetailOrder += pushCart;

    
    }

  }

  }






function crearInfoPago(){
    document.getElementById("infoPago").innerHTML ='';

var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
  for(let i = 0; i < paymentFood.length; i++) {
   if (checkLogin == paymentFood[i].accountPayment) {
    var prinfPaymentCartUser = `<tr style="border-bottom:1px solid #ccc;">
      <td>
      <p>Nombre d usuario: `+paymentFood[i].nombreCliente+`</p>
      <p>Dirección: `+paymentFood[i].direccionCliente+`</p>
      <p>Teléfono: `+paymentFood[i].telefonoCliente+`</p>
       <p>medio de pago: `+paymentFood[i].metodoPago+`</p>
       
      </td>
      
      <td>`+paymentFood[i].showDetailOrder+`<div id="cajaComentarios`+i+`"></div></td>
      <td class="text-center">`+paymentFood[i].priceTotal+`</td>
      <td class="text-center"><button id="crearEstado`+paymentFood[i].paymentId+`" onclick="pagoExitoso(`+paymentFood[i].paymentId+`)" class="btn btn-warning text-white">`+paymentFood[i].status+`</button></td>
          </tr>
    <tr style="width:100%"></tr>
    `

    document.getElementById("infoPago").innerHTML +=prinfPaymentCartUser;
}
  }

  }


function pagoExitoso(id){
    for(let i = 0; i < paymentFood.length; i++) {
      if (id == paymentFood[i].paymentId) {
        paymentFood[i].status="Recibido";
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
        document.getElementById("crearEstado"+id).innerHTML = paymentFood[i].status;

        var cajaComentarios =`<div class="p-3 pb-0" style="width: 100%;background: #3399ff;">
              <div style="float: left;width: 50%">
              <label class=" text-white mb-3" style="width: 100%;">Opinar</label>
              <input id="textoComentarios`+id+`" type="passwork" class="form-control text-white" id="reEntradaPassword"  style="width: 100%;background: #cce5ff;border: 0;outline: none;">
              </div>
            <div class="pt-3" style="float: right;width: 50%">
              <button onclick="sendToAdmin(`+id+`)" class="btn btn-warning float-right text-white" >Enviar</button>
              <p id="sendToSupport" class="float-right mb-0 mt-3 text-white"></p>
                </div>
               
               <div style="clear: both;"></div>
            </div>`;

        document.getElementById("cajaComentarios"+i).innerHTML +=cajaComentarios;
        document.getElementById("idcover"+i).value=id;

      
      }
    }
  }
  
function sendToAdmin(id){
  var checkLogin =JSON.parse(localStorage.getItem('checkLogin'));
  var commentContent = document.getElementById("textoComentarios"+id).value;
  paymentId = id;
  idUser = checkLogin;
  commentCustomerArr = {paymentId,idUser,commentContent};
  commentCustomer.push(commentCustomerArr);
 localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
 document.getElementById("sendToSupport").innerHTML="Gracias por dejarnos tu opinión!";
}




function listProducts(){
document.getElementById("menuProductos").innerHTML ='';
var food =JSON.parse(localStorage.getItem('food'));
    for(let i = 0; i < food.length; i++) { 
    var prinf =`<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
			<div class="contenedorProducto bg-white shadow-sm">
				<div class="contProdImg">
					<img src="`+food[i].image+`" width="100%" height="100%" style="">
				</div>
				<div class="contInfoProd p-3 bg-white">
					<p class="float-left font-weight-bold mb-0" style="font-size: 115%">`+food[i].name+`</p><p class="float-right font-weight-bold mb-2" style="font-size: 115%">AR$ `+food[i].price+`</p>
					<div style="clear: both;"></div>
					
					<p style="font-size: 85%;height:35px;">`+food[i].note+`</p>
					
					<div class="contBtnProd float-right">
						<div onclick="checkOrder(`+food[i].id+`)" class="addToCart float-right pt-2">
							<i class="fa fa-plus" aria-hidden="true"></i>
						</div>
					</div>
					<div style="clear: both;"></div>
				</div>
			</div>
		</div>`;
    document.getElementById("menuProductos").innerHTML +=prinf;
    }}

function changePassword(){
  var account =JSON.parse(localStorage.getItem('account'));
  if (document.getElementById("currentPassword").value == account[checkLogin].password && document.getElementById("newPassword").value == document.getElementById("repeatNewPassword").value) {
        account[checkLogin].password = document.getElementById("newPassword").value;
        localStorage.setItem("account", JSON.stringify(account));  
        document.getElementById("passwordChangeNotification") .innerHTML= "Contraseña cambiada con exito";
       
        setTimeout(() => location.reload(), 1000);

    } else {
        document.getElementById("passwordChangeNotification") .innerHTML= "Algo salio mal";
    }
}

function Logout() {   
    document.getElementById("menuCuenta").style.display = 'none';
    document.getElementById("botonLogin").style.display = 'block';
    document.getElementById("menu_logout").style.display = 'none';  
    checkLogin=-1;  
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));  
    document.getElementById("productosCarrito").innerHTML ='0';
    document.getElementById("tablaCarrito").innerHTML ='';
    document.getElementById("formularioPago").style.display = 'none';
    document.getElementById("miCarrito").style.display = 'block';
    document.getElementById("nombreCliente").value='';  
	document.getElementById("telefonoCliente").value='';
	document.getElementById("direccionCliente").value='';


}

function onloadAll(){
    crearInfoPago();
    	listProducts();
     
    }