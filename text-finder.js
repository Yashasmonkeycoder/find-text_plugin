/*Text finder for your projects and website that is fully compatible with all the type of devices*/
/*MADE BY YASHAS SLK - multi mentality*/
var doc_txt_val = "";var doc_txt = "";var result;var num_add_contu = 0;var hold_coed = "";function srch_appl(str,searchStr){var lastMatch;result = [];if ((lastMatch = str.indexOf(searchStr)) >= 0) {result.push(lastMatch);while ((lastMatch = str.indexOf(searchStr, lastMatch + searchStr.length)) >= 0) {result.push(lastMatch);}}str = str.split('');for(let y=0;y<result.length;y++){str[result[y]] = `<span style='background:#daff078b' id='spn_loc${y}'>`+str[result[y]];str[parseInt(result[y])+searchStr.length] = "</span>"+str[parseInt(result[y])+searchStr.length]}return str.join('')}function end_all_prog(){result = [];num_add_contu = 0;}function end_all_txtData(){end_all_prog();document.getElementById(doc_txt_val).innerHTML = hold_coed;hold_coed = "";doc_txt = "";doc_txt_val = "";document.getElementById("nav-stick_top").style.display="none";}function set_prog_fin(){if(result.length==0){document.getElementById("cont_search").innerText = `${parseInt(num_add_contu)}/${result.length}`;document.getElementById("cont_search").style.color = "#f29696";}else{document.getElementById("cont_search").innerText = `${parseInt(num_add_contu)+1}/${result.length}`;document.getElementById("cont_search").style.color = "#969696";}}function add_num_txtfind(){try{if(num_add_contu<=result.length){num_add_contu+=1;}var element = document.getElementById(`spn_loc${num_add_contu}`);var headerOffset = 150;var elementPosition = element.getBoundingClientRect().top;var offsetPosition = elementPosition + window.pageYOffset - headerOffset;window.scrollTo({top: offsetPosition,behavior: "smooth"});document.getElementById(`spn_loc${num_add_contu}`).style.background="#f0af7c";document.getElementById(`spn_loc${parseInt(num_add_contu)-1}`).style.background="#daff078b";set_prog_fin();}catch(err){num_add_contu = result.length-1;}}function sub_num_txtfind(){try{if(num_add_contu>=0){num_add_contu-=1;}var element = document.getElementById(`spn_loc${num_add_contu}`);var headerOffset = 150;var elementPosition = element.getBoundingClientRect().top;var offsetPosition = elementPosition + window.pageYOffset - headerOffset;window.scrollTo({top: offsetPosition,behavior: "smooth"});document.getElementById(`spn_loc${num_add_contu}`).style.background="#f0af7c";document.getElementById(`spn_loc${parseInt(num_add_contu)+1}`).style.background="#daff078b";set_prog_fin();}catch(err){num_add_contu = 0;}}function set_idVal(id_name){try{document.getElementById(doc_txt_val).innerHTML=hold_coed}catch(err){}hold_coed = "";doc_txt_val = id_name;doc_txt = document.getElementById(doc_txt_val).innerText;document.getElementById("nav-stick_top").style.display="block";document.getElementById("id_search-m").focus();hold_coed = document.getElementById(id_name).innerHTML;}function find_txt(){end_all_prog();var inp_txt = document.getElementById("id_search-m").value;if(inp_txt!=""){document.getElementById(doc_txt_val).innerHTML=srch_appl(doc_txt,inp_txt)};set_prog_fin();try{var element = document.getElementById(`spn_loc${num_add_contu}`);var headerOffset = 150;var elementPosition = element.getBoundingClientRect().top;var offsetPosition = elementPosition + window.pageYOffset - headerOffset;window.scrollTo({top: offsetPosition,behavior: "smooth"});document.getElementById(`spn_loc${num_add_contu}`).style.background="#f0af7c";}catch(e){}}document.getElementById("add_num_txt").setAttribute("onclick","add_num_txtfind()");document.getElementById("sub_num_txt").setAttribute("onclick","sub_num_txtfind()");document.getElementById("id_search-b").setAttribute("onclick","find_txt()");document.getElementById("close_search").setAttribute("onclick","end_all_txtData()");