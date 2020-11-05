$(document).ready(function(){
	  			$('#nuevoProducto').click(function(){
	  			$('#gestionProductos').css('font-weight','bold');
	  			$('#textoDash').css('font-weight','400');
	  			$('#gestionPedidos').css('font-weight','400');
	  			$('#gestionCuentas').css('font-weight','400');	

	  			$('#contenedorGestionProductos').css('display','block');
	  			$('#contenedorDashboard').css('display','none');
	  			$('#tablaPedidos').css('display','none');
	  			$('#tablaCuentas').css('display','none');

  				});
  			});

        	$(document).ready(function(){
	  			$('#gestionProductos').click(function(){
	  			$('#gestionProductos').css('font-weight','bold');
	  			$('#textoDash').css('font-weight','400');
	  			$('#gestionPedidos').css('font-weight','400');
	  			$('#gestionCuentas').css('font-weight','400');	

	  			$('#contenedorGestionProductos').css('display','block');
	  			$('#contenedorDashboard').css('display','none');
	  			$('#tablaPedidos').css('display','none');
	  			$('#tablaCuentas').css('display','none');

  				});
  			});
  			$(document).ready(function(){
	  			$('#textoDash').click(function(){
	  			$('#textoDash').css('font-weight','bold');
	  			$('#gestionPedidos').css('font-weight','400');
	  			$('#gestionCuentas').css('font-weight','400');	
	  			$('#gestionProductos').css('font-weight','400');

	  			$('#contenedorGestionProductos').css('display','none');
	  			$('#contenedorDashboard').css('display','block');
	  			$('#tablaPedidos').css('display','none');
	  			$('#tablaCuentas').css('display','none');
  				});
  			});
  			$(document).ready(function(){
	  			$('#gestionPedidos').click(function(){
	  			$('#gestionPedidos').css('font-weight','bold');
	  			$('#gestionCuentas').css('font-weight','400');	
	  			$('#gestionProductos').css('font-weight','400');
	  			$('#textoDash').css('font-weight','400');
	  			
	  			$('#contenedorGestionProductos').css('display','none');
	  			$('#contenedorDashboard').css('display','none');
	  			$('#tablaPedidos').css('display','block');
	  			$('#tablaCuentas').css('display','none');
  				});
  			});
  			$(document).ready(function(){
	  			$('#gestionCuentas').click(function(){
	  			$('#gestionCuentas').css('font-weight','bold');	
	  			$('#gestionProductos').css('font-weight','400');
	  			$('#textoDash').css('font-weight','400');
	  			$('#gestionPedidos').css('font-weight','400');
	  			
	  			$('#contenedorGestionProductos').css('display','none');
	  			$('#contenedorDashboard').css('display','none');
	  			$('#tablaPedidos').css('display','none');
	  			$('#tablaCuentas').css('display','block');
  				});
              });
              

              function cancelProduct(){
      document.getElementById('entradaProductos').style.display = 'none';
      document.getElementById('scroll_height2').style.height = '450px';

    }

     function showAddProduct(){
      document.getElementById('scroll_height2').style.height = '280px';
      document.getElementById('agregarProducto').style.display = 'block'; 
      document.getElementById('actualizarProducto').style.display = 'none';   
      document.getElementById('entradaProductos').style.display = 'block';
      document.getElementById('entradaNombreProducto').value='';
     document.getElementById('entradaDescProducto').value='';
    document.getElementById('entradaPrecioProducto').value='';
    document.getElementById('agregarImg').value='';

    }


var food =JSON.parse(localStorage.getItem('food'));
  document.getElementById("numeroProductos").innerHTML=food.length;


    var account =JSON.parse(localStorage.getItem('account'));
    document.getElementById("numeroCuentas").innerHTML=account.length;
var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
    document.getElementById("numeroPedidos").innerHTML=paymentFood.length-1;

    var commentCustomer =JSON.parse(localStorage.getItem('commentCustomer'));
    document.getElementById("numeroComentarios").innerHTML=commentCustomer.length-1;



   



var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
if (paymentFood === null) {
        paymentFood = [];
        var paymentFood=[{}];
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
    }
var idupFood =JSON.parse(localStorage.getItem('idupFood'));
if (idupFood === null) {
        idupFood = [];
    var idupFood = 8;
    localStorage.setItem("idupFood", JSON.stringify(idupFood));
}
function AddFood() {
    var id = idupFood;
    var name = document.getElementById('entradaNombreProducto').value;
    var note = document.getElementById('entradaDescProducto').value;
    var price = document.getElementById('entradaPrecioProducto').value;
    var image2 = document.getElementById('agregarImg').value;
    var image = "image/"+image2.split('\\')[2];
    if (name != '' && price !='' && note !='' && image2 !='') {
      
          var pushFood = { id, name, price,note, image};
        food.push(pushFood); 
         localStorage.setItem("food", JSON.stringify(food));
        idupFood++;
         localStorage.setItem("idupFood", JSON.stringify(idupFood));
       manageProducts();
        console.log(food);
      
    var name = document.getElementById('entradaNombreProducto').value='';
    var note = document.getElementById('entradaDescProducto').value='';
    var price = document.getElementById('entradaPrecioProducto').value='';
    var image = document.getElementById('agregarImg').value='';
  }
  else {
    Swal.fire(
  'Información incompleta',
  'Debe completar todos los campos y seleccionar una imagen',
  'error',  
);
  }
}


function eliminarProducto(id) {
    for(var i = 0; i < food.length; i++){
        if( id == food[i].id) {
            food.splice(i, 1);
            
            localStorage.setItem("food", JSON.stringify(food));
            manageProducts();
        }
        
    }
}

function UpdateFood(id) {
  for(var i = 0; i < food.length; i++){
        if( id == food[i].id) {
          document.getElementById('entradaProductos').style.display = 'block';
           document.getElementById("agregarProducto").style.display = 'none';
           document.getElementById("actualizarProducto").style.display = 'block';
          document.getElementById("txtId").value = food[i].id;
            document.getElementById("entradaNombreProducto").value = food[i].name;
            document.getElementById("entradaDescProducto").value = food[i].note;
            document.getElementById("entradaPrecioProducto").value = food[i].price;        
            document.getElementById("agregarImg").value = food[i].image;
            break;
        }
    }
    }
function SaveUpdateFood() {
  var idchange = document.getElementById("txtId").value;

    for(var i = 0; i < food.length; i++){
        if( idchange == food[i].id) {
            food[i].name = document.getElementById("entradaNombreProducto").value;
            food[i].price = document.getElementById("entradaPrecioProducto").value;
            food[i].note = document.getElementById("entradaDescProducto").value;
            var imageChange = document.getElementById('agregarImg').value;
            localStorage.setItem("food", JSON.stringify(food));
            if (imageChange == '') {
              
            }else {
              var image1 = imageChange.split('\\')[2];
              food[i].image = image1;
            }
        
           if (food[i].type == 0 && imageChange !='') {
              
              food.splice(i, 1);
              localStorage.setItem("food", JSON.stringify(food));
              AddFood();
              manageProducts();
             
            }
            manageProducts();
            break;
        }
    }

    document.getElementById('entradaNombreProducto').value='';
     document.getElementById('entradaDescProducto').value='';
    document.getElementById('entradaPrecioProducto').value='';
    document.getElementById('agregarImg').value='';
     document.getElementById("addfood").style.display = 'block';
    document.getElementById("updatefood").style.display = 'none';
  } 


function manageProducts(){
document.getElementById("tablaGestionProductos").innerHTML ='';
var food =JSON.parse(localStorage.getItem('food'));
    for(let i = 0; i < food.length; i++) { 
    var prinfManage =`<tr>
      <td><div>
        <div class="imgCarrito float-left bg-warning" style="width: 30%;height: 80px;">
          <img src="`+food[i].image+`" width="100%" height="100%">
        </div>
        <div class="infoCarrito float-left pl-3" style="width: 70%;height: 80px;">
          <p class="mb-1 font-weight-bold" style="font-size: 115%;">`+food[i].name+`</p>
          <p style="font-size: 85%">`+food[i].note+`</p>
        </div>
      </div> </td>
      
      <td class="text-center"><p class="mt-2" style="padding:5px;">`+food[i].price+`</p> </td>
      <td class="text-center">'<div class="btn btn-danger text-white ml-2" onclick="eliminarProducto(`+food[i].id+`)" style="width: 16%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>
  <div class="btn btn-warning  text-white mr-2" onclick="UpdateFood(`+food[i].id+`)" style="width: 16%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div> </td>
</tr>`;
    document.getElementById("tablaGestionProductos").innerHTML +=prinfManage;
    }}

function manageProducts2(){
document.getElementById("productosDashboard").innerHTML ='';
var food =JSON.parse(localStorage.getItem('food'));
    for(let i = 0; i < food.length; i++) { 
    var prinfManage =`<tr>
      <td><div>
        <div class="imgCarrito float-left bg-warning" style="width: 30%;height: 80px;">
          <img src="`+food[i].image+`" width="100%" height="100%">
        </div>
        <div class="infoCarrito float-left pl-3" style="width: 70%;height: 80px;">
          <p class="mb-1 font-weight-bold" style="font-size: 115%;">`+food[i].name+`</p>
          <p style="font-size: 85%">`+food[i].note+`</p>
        </div>
      </div> </td>
      
      <td class="text-center"><p class="mt-2" style="padding:5px;">`+food[i].price+`</p> </td>
    
</tr>`;
    document.getElementById("productosDashboard").innerHTML +=prinfManage;
    }}



    function crearInfoPedidos(){
    document.getElementById("infoPedidos").innerHTML ='';

	var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
  	for(let i = 1; i < paymentFood.length; i++) {
   
    var prinf_payment_cart = `<tr style="border-bottom:1px solid #ccc;">
      <td>
      <p>Usuario: `+paymentFood[i].nombreCliente+`</p>
      <p>Dirección: `+paymentFood[i].direccionCliente+`</p>
      <p>Teléfono: `+paymentFood[i].telefonoCliente+`</p>
       <p>Medio de pago: `+paymentFood[i].metodoPago+`</p>
      </td>
      
      <td>`+paymentFood[i].showDetailOrder+`<p id="crearOpinion`+paymentFood[i].paymentId+`"></p></td>
      <td class="text-center">`+paymentFood[i].priceTotal+`</td>
      <td class="text-center"><button id="crearEstado`+paymentFood[i].paymentId+`" onclick="verificarPago(`+paymentFood[i].paymentId+`)" class="btn btn-warning text-white">`+paymentFood[i].status+`</button></td>
    </tr>
    ` 
    document.getElementById("infoPedidos").innerHTML +=prinf_payment_cart;
  }

  }



  function crearInfoPedidosDash(){
    document.getElementById("pedidosDashboard").innerHTML ='';

	var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
  	for(let i = 1; i < paymentFood.length; i++) {
   
    var prinf_payment_cart = `<tr style="border-bottom:1px solid #ccc;">
      
      <td>`+paymentFood[i].showDetailOrder+`</td>
 
     
    </tr>
    ` 
    document.getElementById("pedidosDashboard").innerHTML +=prinf_payment_cart;
  }

  }



  function verificarPago(id){
    for(let i = 0; i < paymentFood.length; i++) {
      if (id == paymentFood[i].paymentId) {
        paymentFood[i].status="Confirmado";
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
        document.getElementById("crearEstado"+id).innerHTML = paymentFood[i].status;
      }
    }
  }


  function opinionesDashboard(){
    document.getElementById("opinionesDashboard").innerHTML ='';

  var commentCustomer =JSON.parse(localStorage.getItem('commentCustomer'));
  var account =JSON.parse(localStorage.getItem('account'));
    for(let i = 1; i < commentCustomer.length; i++) {
   
    var prinfComment = `<td>`+commentCustomer[i].paymentId+`</td>
    <td>`+account[commentCustomer[i].idUser].username+`</td>
    <td>`+commentCustomer[i].commentContent+`</td>
    ` ;
    document.getElementById("crearOpinion"+commentCustomer[i].paymentId).innerHTML ="Opinión del cliente: "+commentCustomer[i].commentContent;
    document.getElementById("opinionesDashboard").innerHTML +=prinfComment;
  }

  }








    





    
 function cancelAccount(){
      document.getElementById('entradaUsuario').style.display = 'none';
      document.getElementById('scroll_height').style.height = '450px';

    }

     function showAddAccount(){
      document.getElementById('scroll_height').style.height = '280px';
      document.getElementById('agregarUsuario').style.display = 'block'; 
      document.getElementById('actualizarUsuario').style.display = 'none';   
      document.getElementById('entradaUsuario').style.display = 'block';
      document.getElementById('entradaActualizacionUsuario').style.display = 'none';
      document.getElementById('entradaNombreProducto').value='';
     document.getElementById('entradaDescProducto').value='';
    document.getElementById('entradaPrecioProducto').value='';
    document.getElementById('agregarImg').value='';
    }
var accountInfo = [];

if (accountInfo === null) {
        accountInfo = [];
    }
var account = [];
var account =JSON.parse(localStorage.getItem('account'));
if (account === null) {
        account = [];
    }
    var idChangeUser =0;
    function editUserAdmin(id){
      var accountInfo =JSON.parse(localStorage.getItem('accountInfo'));
      document.getElementById('entradaUsuario').style.display = 'none';
      document.getElementById('entradaActualizacionUsuario').style.display = 'block';

      for(var i = 1; i < accountInfo.length; i++){
        if( id == accountInfo[i].accountPayment) {
    idChangeUser=accountInfo[i].accountPayment;
          document.getElementById("txtId").value = i;
            document.getElementById("entradaCambioNombre").value = accountInfo[i].nombreCliente;
            document.getElementById("entradaCambioDireccion").value = accountInfo[i].direccionCliente;
            document.getElementById("entradaCambioTelefono").value = accountInfo[i].telefonoCliente;
            document.getElementById("entradaCambioPago").value = accountInfo[i].metodoPago;
            
            break;
        }
    }
    }

    function saveUserAdmin() {
      var accountInfo =JSON.parse(localStorage.getItem('accountInfo'));
    for(var i = 0; i < accountInfo.length; i++){
        if( idChangeUser == accountInfo[i].accountPayment) {
           accountInfo[i].nombreCliente = document.getElementById("entradaCambioNombre").value;
            accountInfo[i].direccionCliente = document.getElementById("entradaCambioDireccion").value;
            accountInfo[i].telefonoCliente = document.getElementById("entradaCambioTelefono").value;
            accountInfo[i].metodoPago = document.getElementById("entradaCambioPago").value;
            localStorage.setItem("accountInfo", JSON.stringify(accountInfo)); 

            manageUser();

            break;
        }
    }

    document.getElementById('entradaCambioNombre').value='';
     document.getElementById('entradaCambioDireccion').value='';
    document.getElementById('entradaCambioTelefono').value='';
    document.getElementById('entradaCambioPago').value='';
  
  } 

    




var idup =JSON.parse(localStorage.getItem('idup'));
function addUser() {
    var checkUsername = 0;
    var id = idup;
    var username = document.getElementById('entradaNombreUsuario').value;
    var password = document.getElementById('entradaPassword').value;
    var repassword = document.getElementById('reEntradaPassword').value;
    var level=0;
    if (username != '' && password !='' && repassword !='' && password == repassword) {
      for(let i = 0; i < account.length; i++) {
        if (account[i].username== username) {
          Swal.fire(
              'La cuenta ya existe',
              'Ya existe una cuenta con ese nombre de usuario',
              'error',
            )
         
           checkUsername = 1;
            break;
        }

      }
      if (checkUsername == 0) {
    accountSignupAdmin = {id,username,password,level};
    account.push(accountSignupAdmin);
    localStorage.setItem("account", JSON.stringify(account));
    idup++;
    localStorage.setItem("idup", JSON.stringify(idup));
    console.log(account); 
    Swal.fire(
  'Registro exitoso',
  'Ya podes acceder a la cuenta',
  'success',  
);
    manageUser();
    }
}else { 
  Swal.fire(
  'No se pudo completar el registro',
  'Asegurese de haber completado todos los campos de manera correcta',
  'error',  
)
}
}

function deleteUserAdmin(id) {
  var account =JSON.parse(localStorage.getItem('account'));
    for(var i = 0; i < account.length; i++){
        if( id == account[i].id) {
            account.splice(i, 1);
             localStorage.setItem("account", JSON.stringify(account));
            manageUser();
            break;
        }
    }
}



function manageUser(){
document.getElementById("tablaGestionUsuarios").innerHTML ='';
var account =JSON.parse(localStorage.getItem('account'));
    for(let i = 0; i < account.length; i++) { 
    var prinfManage =`<div class="col-4" style="height: 100px;padding:10px; padding-right:50px;">
      <div class="userInfoAdmin float-left" style="width: 60%">
        <p class="font-weight-bold" style="font-size: 120%">`+account[i].username+`</p>
        
      </div>
      <div class="userFunctionAdmin float-right" style="width: 40%;display: flex;">
      <div class="btn btn-warning mr-1 text-white" onclick="editUserAdmin(`+account[i].id+`)" style="width: 40%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
        <div class="btn btn-danger text-white" onclick="deleteUserAdmin(`+account[i].id+`)" style="width: 40%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>

  
    </div></div>`;
    document.getElementById("tablaGestionUsuarios").innerHTML +=prinfManage;
    }}
 function onloadAll1(){
      crearInfoPedidos();
      manageProducts();
      crearInfoPedidosDash();
      manageProducts2();
      opinionesDashboard();
      manageUser();
    }