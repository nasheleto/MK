const search = document.querySelector('.header__search > img')
const input = document.querySelector('.input-search')

search.onclick = function(){
	if(input.style.display === 'block') {
	 input.style.display = 'none'
	} else {
	 input.style.display = 'block'
	}
}

const question = document.querySelectorAll('.section-faq-block')
const answer = document.querySelectorAll('.section-faq-answer')

question.forEach((e, i) => {
	e.onclick = function(){
		if(answer[i].style.display === 'block') {
		 answer[i].style.display = 'none'
		} else {
		 answer[i].style.display = 'block'
		}
	}
})

