(function ($) {	

//CEP - Puxando endereço

function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
}

	// =====================================================
	//      PRELOADER
	// =====================================================
	$(window).on("load", function () {
		'use strict';
		$('[data-loader="circle-side"]').fadeOut(); 
		$('#preloader').delay(350).fadeOut('slow'); 
		var $hero = $('.hero-home .content');
		var $hero_v = $('#hero_video .content ');
		$hero.find('h3, p, form').addClass('fadeInUp animated');
		$hero.find('.btn-1').addClass('fadeIn animated');
		$hero_v.find('.h3, p, form').addClass('fadeInUp animated');
		$(window).scroll();
	})

	updateSpanWithSequentialNumber();

	function removerAcentos(texto1) {
		return texto1
			.normalize("NFD") 
			.replace(/[\u0300-\u036f]/g, "") 
			.replace(/-/g, ""); 
	}

	function convertToUpperCase(str) {
		return str.toUpperCase();
	}


	  



enviarButton.addEventListener('click', function (event) {
	event.preventDefault();
	var empresa = document.getElementById("empresa").value || document.getElementById("nome").value;
	var cnpj = document.getElementById("cnpj").value || '';
	var IE = document.getElementById('ie').value || '';
	var cpf = document.getElementById("cpf").value || '';
	var nome = document.getElementById("nome").value;
	var ddd = document.getElementById("ddd").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;	
	var ruaEnd = document.getElementById("rua").value;
	var numeroEnd = document.getElementById("numero-end").value;
	var bairroEnd = document.getElementById("bairro").value;
	var cidadeEnd = document.getElementById("cidade").value;
	var codcidade = document.getElementById("codcidade").value || '3550308';
	var ufEnd = document.getElementById("uf").value;
	var cep = document.getElementById("cep").value;
	var fileURL = document.getElementById("file-url").value || '';	

	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	 if (!email.match(emailRegex)) {
		 alert("Por favor, insira um email válido.");
		 return;
	 }
	
	 const numeroDDD = parseInt(ddd, 10);
		  
			if (isNaN(numeroDDD) || numeroDDD < 11 || numeroDDD > 99) {
			alert("Por favor, insira um DDD válido.");
			  return false; // DDD inválido			  
			}

			if (!validarCNPJ(cnpj, cpf)) {
				return; // Se inválido, não prossegue
			}			
		
	 itensSelecionados = [];
	 resumoLista.querySelectorAll('li').forEach((li, index) => {
		 const itemId = li.dataset.itemId;
		 let itemText = li.textContent.trim();
		 itemText = itemText.replace(/\s+/g, ' '); 
		 const quantidadeMatch = itemText.match(/Quantidade: (\d+)/);
		 const quantidade = quantidadeMatch ? quantidadeMatch[1] : '0';
		 const personalizado = itemText.includes('Personalizado');
		 itensSelecionados.push({
			 sequencia: index + 1,
			 codigo: itemId,
			 nome: itemText.replace(/ - Quantidade: \d+( - Personalizado)?/, ''),
			 qtde: quantidade,
			 valorUn: 0,
			 observ: ''
		 });
	 });

	var codPedido = document.getElementById("numorc").textContent;

	const raw = JSON.stringify({
		"Autenticacao": {
    "Login": "ICARUS",
    "Senha": "182200186199186197167197162191162187",
    "CodUsuar": 96
  },
		"ReqPLUG": {
			"pedido": {
				"codPedido": codPedido,
				"titulo": "Orçamento Wizard",
				"codPedCli": codPedido,
				"releaseDate": getCurrentDate(),
				"dtEntrega": "00-00-0000",
				"observ": fileURL,
				"cliente": {
					"razao": convertToUpperCase(empresa),
					"apelido": convertToUpperCase(empresa),
					"CNPJ": cnpj,
					"IE": IE,
					"CPF": cpf,
					"ddd": ddd,
					"fone": phone,
					"email": convertToUpperCase(email),
					"endereco": {
						"ender": convertToUpperCase(ruaEnd),
						"numero": numeroEnd,
						"complemento": "",
						"bairro": convertToUpperCase(bairroEnd),
						"cidade": convertToUpperCase(cidadeEnd),
						"cidadeCod": codcidade,
						"siglaUF": convertToUpperCase(ufEnd),
						"pais": "Brasil",
						"paisIBGE": "1058",
						"CEP": removerAcentos(cep)
					},
					"contato": {
						"nome": nome,
						"ddd": ddd,
						"fone": phone,
						"email": email
					}
				},
				lstItens: itensSelecionados
			}
		}
	});

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};

	fetch("https://jmbsolutions.com.br/dev/nazaraj/sendRaj.php", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        if (result.toLowerCase().includes("erro")) {
            alert('Houve um problema ao enviar seu orçamento, faça a validação.');
        } else {
            alert('Seu orçamento foi enviado com sucesso!');
            
            // Código do Google Conversion Tracking
            gtag('event', 'conversion', {
                'send_to': 'AW-795824296/qyTKCP3x9LYBEKihvfsC' 
            });

            // Redirecionamento após o envio bem-sucedido
            window.location.href = 'https://nazapack.com.br';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um problema ao enviar seu orçamento, faça a validação.');
    });

});



	// =====================================================
	//      BACK TO TOP BUTTON
	// =====================================================
	function scrollToTop() {
		$('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
	}

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn('slow');
		} else {
			$('#toTop').fadeOut('slow');
		}
	});

	$('#toTop').on('click', function () {
		scrollToTop();
		return false;
	});

	// =====================================================
	//      NAVBAR
	// =====================================================
	$(window).on('scroll load', function () {

		if ($(window).scrollTop() >= 1) {
			$('.main-header').addClass('active');
		} else {
			$('.main-header').removeClass('active');
		}

	});

	// =====================================================
	//      STICKY SIDEBAR SETUP
	// =====================================================
	$('#mainContent, #sidebar').theiaStickySidebar({
		additionalMarginTop: 90
	});

	// =====================================================
	//      MOBILE MENU
	// =====================================================	
	var $menu = $("nav#menu").mmenu({
		"extensions": ["pagedim-black", "theme-dark"], 
		counters: true,
		keyboardNavigation: {
			enable: true,
			enhance: true
		},
		navbar: {
			title: 'MENU'
		},
		navbars: [{ position: 'bottom', content: ['<a href="#">© 2024 Nazapack</a>'] }]
	},
		{
			// configuration
			clone: true,
		});
	var $icon = $("#hamburger");
	var API = $menu.data("mmenu");
	$icon.on("click", function () {
		API.open();
	});
	API.bind("open:finish", function () {
		setTimeout(function () {
			$icon.addClass("is-active");
		}, 100);
	});
	API.bind("close:finish", function () {
		setTimeout(function () {
			$icon.removeClass("is-active");
		}, 100);
	});

	// =====================================================
	//      FAQ NICE SCROLL
	// =====================================================
	var position;

	$('a.nice-scroll-faq').on('click', function (e) {
		e.preventDefault();
		position = $($(this).attr('href')).offset().top - 125;
		$('body, html').animate({
			scrollTop: position
		}, 500, 'easeInOutExpo');
	});

	$('ul#faqNav li a').on('click', function () {
		$('ul#faqNav li a.active').removeClass('active');
		$(this).addClass('active');
	});


	// =====================================================
	//      FORM LABELS
	// =====================================================		
	new FloatLabels('#personalDetails', {
		style: 1
	});

	// =====================================================
	//      FORM INPUT VALIDATION
	// =====================================================

	// Quantity inputs
	$('.qty-input').on('keypress', function (event) {
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});

	$('#optionGroup1Qty').on('keypress', function () {
		selectedItem1Title = $('#optionGroup1List option:selected').text();
		if (selectedItem1Title == chooseItemText) {
			$('#alertModal1').modal();
		}
	});

	$('#optionGroup2Qty').on('keypress', function () {
		selectedItem2Title = $('#optionGroup2List option:selected').text();
		if (selectedItem2Title == chooseItemText) {
			$('#alertModal2').modal();
		}
	});

	$('#optionGroup3Qty').on('keypress', function () {
		selectedItem3Title = $('#optionGroup3List option:selected').text();
		if (selectedItem3Title == chooseItemText) {
			$('#alertModal3').modal();
		}
	});

	window.Parsley.addValidator('emptyOrder', {
		validateString: function (value) {
			return value !== '$ 0.00';
		},
		messages: {
			en: 'Order is empty.'
		}
	});

	$('#orderForm').parsley({
		locale: 'pt'
	  });
	
	// Clear parsley empty elements
	if ('#orderForm'.length > 0) {
		$('#orderForm').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

})(window.jQuery);

function generateSequentialNumber() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var sequentialNumber = year.toString() + 
						   month.toString().padStart(2, '0') + 
						   day.toString().padStart(2, '0') + 
						   hour.toString().padStart(2, '0') + 
						   minute.toString().padStart(2, '0') + 
						   second.toString().padStart(2, '0');
	
	return sequentialNumber;
}

function getCurrentDate() {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const currentDate = day + '/' + month + '/' + year;
    return currentDate;
}

function updateSpanWithSequentialNumber() {
	var sequentialNumber = generateSequentialNumber();
	var span = document.getElementById("numorc");
	if (span) {
		span.textContent = sequentialNumber;
	}
}

function limparFormulario() {
	var form = document.getElementById('orderForm');
	for (var i = 0; i < form.elements.length; i++) {
		var elemento = form.elements[i];
		if (elemento.type == 'text' || elemento.type == 'textarea' || elemento.type == 'email' || elemento.type == 'number' || elemento.type == 'password') {
			elemento.value = '';		}
		if (elemento.type == 'checkbox' || elemento.type == 'radio') {
			elemento.checked = false;
		}
		if (elemento.type == 'select-one' || elemento.type == 'select-multiple') {
			elemento.selectedIndex = -1;
		}
	}
	var list = document.getElementById('orderSumList');
    if (list) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

}

