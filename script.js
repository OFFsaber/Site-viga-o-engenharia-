// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');

menuMobile.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Exemplo de feedback visual
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulação de envio (substitua por sua lógica real de envio)
    setTimeout(() => {
        submitButton.textContent = 'Mensagem Enviada!';
        contactForm.reset();
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }, 1500);
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.service-card, .projects-grid > div, .about-content, .contact-container > div').forEach((el) => {
    observer.observe(el);
});

// IMPORTAÇÃO DAS IMAGENS DOS SERVIÇOS
import { imgArquitetura, videoArquitetura } from './imgArquitetura.js';
import { imgEletrico, videoEletrico } from './imgEletrico.js';
import { imgHidrossanitario, videoHidrossanitario } from './imgHidrossanitario.js';
import { imgCabeamentoEstruturado, videoCabeamentoEstruturado } from './imgCabeamentoEstruturado.js';
import { imgEstruturalMetalico, videoEstruturalMetalico } from './imgEstruturalMetalico.js';
import { imgEstruturalConcreto, videoEstruturalConcreto } from './imgEstruturalConcreto.js';
import { imgMuroContencoes, videoMuroContencoes } from './imgMuroContencoes.js';
import { imgArCondicionado, videoArCondicionado } from './imgArCondicionado.js';
import { imgLaudosTecnicos, videoLaudosTecnicos } from './imgLaudosTecnicos.js';
import { imgInicio } from './imgInicio.js';

// Dados dos serviços
const servicos = [
  {
    nome: 'Arquitetura',
    icone: 'fas fa-drafting-compass',
    descricao: 'Projetos arquitetônicos completos, funcionais e modernos.',
    imagens: imgArquitetura,
    videos: videoArquitetura,
    motivador: 'Transforme seu sonho em realidade! Um projeto arquitetônico bem feito valoriza seu imóvel, traz conforto, beleza e funcionalidade. Não adie o que pode mudar sua vida e seu patrimônio. Invista em arquitetura profissional e sinta orgulho do seu espaço todos os dias.'
  },
  {
    nome: 'Elétrico',
    icone: 'fas fa-bolt',
    descricao: 'Projetos elétricos residenciais, comerciais e industriais.',
    imagens: imgEletrico,
    videos: videoEletrico,
    motivador: 'Segurança, economia e tecnologia! Um projeto elétrico bem planejado evita riscos, reduz custos e garante tranquilidade para você e sua família. Não arrisque seu patrimônio, escolha quem entende do assunto.'
  },
  {
    nome: 'Hidrossanitário',
    icone: 'fas fa-tint',
    descricao: 'Soluções eficientes para instalações hidráulicas e sanitárias.',
    imagens: imgHidrossanitario,
    videos: videoHidrossanitario,
    motivador: 'Evite dores de cabeça com infiltrações e desperdício de água! Um bom projeto hidrossanitário traz economia, saúde e sustentabilidade para sua obra.'
  },
  {
    nome: 'Cabeamento Estruturado',
    icone: 'fas fa-network-wired',
    descricao: 'Infraestrutura de redes e comunicação para sua obra.',
    imagens: imgCabeamentoEstruturado,
    videos: videoCabeamentoEstruturado,
    motivador: 'Conecte-se ao futuro! Um ambiente bem cabeado é garantia de produtividade, organização e tecnologia. Não fique para trás.'
  },
  {
    nome: 'Estrutural Metálico',
    icone: 'fas fa-industry',
    descricao: 'Projetos e execução de estruturas metálicas.',
    imagens: imgEstruturalMetalico,
    videos: videoEstruturalMetalico,
    motivador: 'Agilidade, resistência e modernidade! Estruturas metálicas são o que há de mais avançado em construção. Sua obra merece o melhor.'
  },
  {
    nome: 'Estrutural em Concreto Armado',
    icone: 'fas fa-cube',
    descricao: 'Projetos estruturais robustos e seguros.',
    imagens: imgEstruturalConcreto,
    videos: videoEstruturalConcreto,
    motivador: 'Segurança é tudo! Um projeto estrutural bem feito protege vidas e investimentos. Não corra riscos, escolha qualidade.'
  },
  {
    nome: 'Muro de Contenções',
    icone: 'fas fa-mountain',
    descricao: 'Projetos de contenção para segurança e estabilidade.',
    imagens: imgMuroContencoes,
    videos: videoMuroContencoes,
    motivador: 'Evite deslizamentos e problemas futuros! Um muro de contenção bem projetado é sinônimo de tranquilidade e segurança.'
  },
  {
    nome: 'Ar-Condicionado',
    icone: 'fas fa-snowflake',
    descricao: 'Projetos de climatização eficientes e econômicos.',
    imagens: imgArCondicionado,
    videos: videoArCondicionado,
    motivador: 'Conforto térmico é qualidade de vida! Tenha ambientes agradáveis o ano todo com um projeto de climatização profissional.'
  },
  {
    nome: 'Laudos Técnicos',
    icone: 'fas fa-file-alt',
    descricao: 'Emissão de laudos e pareceres técnicos especializados.',
    imagens: imgLaudosTecnicos,
    videos: videoLaudosTecnicos,
    motivador: 'Decisões seguras e respaldo legal! Laudos técnicos são essenciais para garantir a segurança e valorizar seu imóvel.'
  }
];

// Função para renderizar a lista de serviços
function renderizarServicos() {
  const servicesGrid = document.querySelector('.services-grid');
  servicesGrid.innerHTML = '';
  servicos.forEach((servico, idx) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.backgroundImage = servico.imagens[0] ? `url('${servico.imagens[0]}')` : '';
    card.innerHTML = `
      <div class="service-card-overlay"></div>
      <i class="${servico.icone}"></i>
      <h3>${servico.nome}</h3>
      <p>${servico.descricao}</p>
    `;
    card.addEventListener('click', () => renderizarDetalheServico(idx));
    servicesGrid.appendChild(card);
  });
}

// Função para renderizar a página de detalhes do serviço
function renderizarDetalheServico(idx) {
  const servico = servicos[idx];
  const section = document.getElementById('servicos');
  section.innerHTML = `
    <button class="voltar-servicos">&larr; Voltar para serviços</button>
    <div class="detalhe-servico">
      <div class="detalhe-servico-header">
        <i class="${servico.icone}"></i>
        <h2>${servico.nome}</h2>
      </div>
      <p class="detalhe-servico-motivador">${servico.motivador}</p>
      <div class="detalhe-servico-galeria">
        ${servico.imagens.map(link => `<img src="${link}" alt="${servico.nome}" onclick="window.open('${link}','_blank')">`).join('')}
      </div>
      <div class="detalhe-servico-videos">
        ${servico.videos.map(link => `<iframe src="${link}" width="100%" height="300" allow="autoplay; encrypted-media" allowfullscreen></iframe>`).join('')}
      </div>
      <button class="cta-button detalhe-servico-cta">Quero esse serviço!</button>
    </div>
  `;
  section.querySelector('.voltar-servicos').onclick = () => renderizarServicos();
  section.querySelector('.detalhe-servico-cta').onclick = () => {
    document.getElementById('contato').scrollIntoView({behavior: 'smooth'});
  };
}

// Inicialização
renderizarServicos();

// Projetos em Destaque (exemplo de dados)
const projetos = [
    {
        titulo: 'Projeto Residencial Moderno',
        descricao: 'Casa contemporânea com foco em sustentabilidade',
        imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        titulo: 'Complexo Comercial',
        descricao: 'Centro empresarial com tecnologia de ponta',
        imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        titulo: 'Projeto Industrial',
        descricao: 'Fábrica sustentável com alta eficiência',
        imagem: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
];

// Renderizar projetos
const projectsGrid = document.querySelector('.projects-grid');

projetos.forEach(projeto => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
    `;
    projectsGrid.appendChild(projectCard);
}); 