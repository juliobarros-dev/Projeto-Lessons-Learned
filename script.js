const header = document.getElementById('cabecalho');
const navbar = document.createElement('nav');
const personalInfosSection = document.getElementById('personal-infos');
const mainSection = document.getElementById('main');
const listaOrdenada = document.getElementById('licoes_aprendidas');
const listaDesordenada = document.getElementById('licoes_a_aprender');
const footer = document.getElementById('rodape');
const projectTitle = 'Lessons Learned';
const githubLink = 'https://github.com/juliobarros-dev';
const linkedinLink = 'https://www.linkedin.com/in/juliobnascimento/';
const imageSRC = './Imagens/ProfilePicture.jpeg';
const nome = 'Julio de Barros Nascimento';
const aprensetacao = `27 anos, natural de São Paulo/SP.
Engenheiro Ambiental e estudante de Desenvolvimento Web`;
const mainText = 'Durante a minha formação como engenheiro, trabalhei no mercado financeiro e na época acreditava que seria o local no qual construiria minha carreira, porém, não me sentia no lugar correto. Quando me aproximei da tecnologia, senti que era o caminho que eu deveria seguir. A oi a parceira que encontrei para atingir o objetivo de me tornar Desenvolvedor Web.'
const asideText = 'Este é meu primeiro projeto desenvolvido. Os elementos aplicados nesta página fazem parte do primeiro módulo do curso de Desenvolvimento Web da Trybe.';
const learnedArray = ['Unix', 'Git', 'GitHub', 'Empatia', 'HTML', 'CSS', 'Slack', 'Zoom', 'Inspect', 'Semantic HTML'];
const toLearn = ['JavaScript', 'DOM', 'Forms', 'CSS Responsive', 'ES6', 'HOF', 'Unit Tests', 'React', 'Node', 'SQL'];
const trybeURL = 'https://www.betrybe.com/formacao-desenvolvimento-web';
const footerText = 'Para conhecer a formação completa';
const trybeImg = 'Imagens/Trybe.jpeg';
const rightsText = 'Todos os direitos reservados';

function createTitle() {
	const title = document.createElement('h1');
	title.innerHTML = projectTitle;
	title.id = 'titulo'
	header.appendChild(title);
}

createTitle();

function createHeaderNavbar() {
	navbar.id = 'navegacao'
	header.appendChild(navbar);
}

createHeaderNavbar();

function createLink(href, target = '_black', classe = 'links') {
	const element = document.createElement('a');
	element.href = href;
	element.target = target;
	element.className = classe;
	return element;
}

function createIcon(classe) {
	const createIconElement = document.createElement('i');
	createIconElement.className = classe;
	return createIconElement;
}

function githubIconLink() {
	const linkToUse = createLink(githubLink);
	const iconToUse = createIcon('bi bi-github github');
	linkToUse.appendChild(iconToUse);
	navbar.appendChild(linkToUse);
}
githubIconLink()

function linkedinIconLink() {
	const linkToUse = createLink(linkedinLink);
	const iconToUse = createIcon('bi bi-linkedin linkedin');
	linkToUse.appendChild(iconToUse);
	navbar.appendChild(linkToUse);
}
linkedinIconLink();

function definePicture() {
	const imgSection = document.getElementById('foto-section');
	const imagem = document.createElement('img');
	imagem.src = imageSRC;
	imagem.id = 'minha_foto';
	imagem.alt = 'Foto de Julio Barros';
	imgSection.appendChild(imagem);
}
definePicture();

function personalInfos() {
	const titleH2 = document.createElement('h2');
	titleH2.innerText = nome;
	personalInfosSection.appendChild(titleH2);
	const presentation = document.createElement('span');
	presentation.innerText = aprensetacao;
	personalInfosSection.appendChild(presentation);
}
personalInfos();

function createMainSection() {
	const article = document.createElement('article');
	const paragrafo = document.createElement('p');
	article.className = 'lado-esquerdo';
	paragrafo.className = 'maintext'
	paragrafo.innerText = mainText;
	article.appendChild(paragrafo);
	mainSection.appendChild(article);
}
createMainSection();

function createAsideSection() {
	const article = document.createElement('article');
	const paragrafo = document.createElement('p');
	article.className = 'lado-direito';
	paragrafo.className = 'asidetext';
	paragrafo.innerText = asideText;
	article.appendChild(paragrafo);
	mainSection.appendChild(article);
}
createAsideSection();

function createOrdenedList() {
	learnedArray.forEach((item) => {
		const li = document.createElement('li');
		li.innerText = item;
		listaOrdenada.appendChild(li);
	});
}
createOrdenedList();

function createUnorganizedList() {
	toLearn.forEach((item) => {
		const li = document.createElement('li');
		li.innerText = item;
		listaDesordenada.appendChild(li);
	});
}
createUnorganizedList();

function footerLink() {
	const link = document.createElement('a');
	link.id = 'links';
	link.href = trybeURL;
	link.target = '_blank';
	link.innerText = ' Clique aqui.'
	return link;
}

function footerImage() {
	const img = document.createElement('img');
	img.src = trybeImg;
	return img;
}

function createFooterTable() {
	const table = document.createElement('table');
	const tableRow = document.createElement('tr');
	const tableData = document.createElement('td');
	const paragrafo = document.createElement('p');

	paragrafo.innerText = rightsText;
	paragrafo.id = 'contato';
	tableData.appendChild(paragrafo);
	tableRow.appendChild(tableData);
	table.appendChild(tableRow);
	table.className = 'table';
	return table;
}

function createFooter() {
	const paragrafo = document.createElement('p');
	const link = footerLink();
	const img = footerImage();
	const table = createFooterTable();
	paragrafo.innerText = footerText;
	paragrafo.appendChild(link);
	footer.appendChild(paragrafo);
	footer.appendChild(img);
	footer.appendChild(table);
}
createFooter();
