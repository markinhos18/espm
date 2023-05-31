import Curso, { CursoTemplateProps } from 'templates/Curso'

import galleryMock from 'components/Gallery/mock'
import cursoMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function Index(props: CursoTemplateProps) {
  return <Curso {...props} />
}

// gerar os paths
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'engenharia-de-software' } }],
    fallback: false
  }
}

// passar os dados de forma Estatica
export async function getStaticProps() {
  const descriptionHTML = `
    <div class="elementor-tabs-content-wrapper" role="tablist" aria-orientation="vertical">
									
					<div id="elementor-tab-content-5271" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-5271" tabindex="0" style="display: block;"><p>		</p><div data-elementor-type="section" data-elementor-id="4418" class="elementor elementor-4418">
					<div class="elementor-section-wrap">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-0ec4f34 elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="0ec4f34" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;6d04fae&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-6d04fae jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(49.8px);"></div></div>
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-38132a5" data-id="38132a5" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-e766c3a elementor-widget elementor-widget-heading" data-id="e766c3a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Para quem enxerga tecnologia em tudo</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-4f32ef2 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4f32ef2" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-227fa2d" data-id="227fa2d" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-456334c elementor-widget elementor-widget-text-editor" data-id="456334c" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p><span data-contrast="none">A tecnologia está ao nosso redor, em cada detalhe.&nbsp;E,&nbsp;em meio a tanta inovação, são necessários profissionais que consigam integrar conhecimento tecnológico, comportamento humano, gestão e desenvolvimento de negócios.&nbsp;</span>Assim são os profissionais de <strong>Sistemas de Informação</strong> formados aqui na ESPM.&nbsp;</p><p><span data-contrast="none">Um profissional diferenciado e mais completo, líder nato, alinhado às tendências tecnológicas, com competências e habilidades extras que superam o que costuma ser esperado de um formado em curso tradicional de Sistemas de Informação. É um profissional formado em tecnologia com&nbsp;DNA&nbsp;ESPM.</span><span data-ccp-props="{}">&nbsp;</span></p>					</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-77d31d7 elementor-widget elementor-widget-image" data-id="77d31d7" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
								<div class="elementor-image">
												<img decoding="async" width="768" height="513" src="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg" class="attachment-medium_large size-medium_large entered lazyloaded" alt="grad sao 24" data-lazy-srcset="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg 768w, https://www.espm.br/wp-content/uploads/grad-sao-24-300x200.jpg 300w, https://www.espm.br/wp-content/uploads/grad-sao-24-600x401.jpg 600w, https://www.espm.br/wp-content/uploads/grad-sao-24.jpg 999w" data-lazy-sizes="(max-width: 768px) 100vw, 768px" title="Sistemas de Informação ESPM 7" data-lazy-src="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg" data-ll-status="loaded" sizes="(max-width: 768px) 100vw, 768px" srcset="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg 768w, https://www.espm.br/wp-content/uploads/grad-sao-24-300x200.jpg 300w, https://www.espm.br/wp-content/uploads/grad-sao-24-600x401.jpg 600w, https://www.espm.br/wp-content/uploads/grad-sao-24.jpg 999w"><noscript><img decoding="async" width="768" height="513" src="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg" class="attachment-medium_large size-medium_large" alt="grad sao 24" srcset="https://www.espm.br/wp-content/uploads/grad-sao-24-768x513.jpg 768w, https://www.espm.br/wp-content/uploads/grad-sao-24-300x200.jpg 300w, https://www.espm.br/wp-content/uploads/grad-sao-24-600x401.jpg 600w, https://www.espm.br/wp-content/uploads/grad-sao-24.jpg 999w" sizes="(max-width: 768px) 100vw, 768px" title="Sistemas de Informação ESPM 7"></noscript>														</div>
						</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-3a02fe3 elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="3a02fe3" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;6d04fae&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-6d04fae jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(0px);"></div></div>
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bf4971b" data-id="bf4971b" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-54f6a5a elementor-widget elementor-widget-heading" data-id="54f6a5a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Diferenciais</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-65a9771 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="65a9771" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-489518f elementor-widget elementor-widget-text-editor" data-id="489518f" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p>A ESPM é diferenciada, logo, o(a) profissional de sistemas de informação formado(a) por aqui também é!</p><p>Além da formação típica em Sistemas de Informação, na ESPM você terá:</p>					</div>
						</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-792206a" data-id="792206a" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-40bf4ce elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="40bf4ce" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">O melhor curso de tecnologia de São Paulo</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">Nota máxima no ENADE</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">Parceria com grandes empresas</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">Tecnologia de ponta</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">Inovação tecnológica</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-angle-double-right"></i>						</span>
										<span class="elementor-icon-list-text">Nota máxima no MEC</span>
									</li>
						</ul>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-40537c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="40537c1" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;2e01f26&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-2e01f26 jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(0px);"></div></div>
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e48397" data-id="5e48397" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-22f4887 elementor-cta--layout-image-left elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action" data-id="22f4887" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://sistemasdeinformacao.espm.edu.br/" target="_blank" rel="noopener">
							<div class="elementor-cta__content">
				
				<h2 class="elementor-cta__title elementor-cta__content-item elementor-content-item">Conheça o dia a dia do curso de Sistemas de Informação</h2>
				
									<div class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item ">
					<span class="elementor-cta__button elementor-button elementor-size-sm">
						Saiba mais					</span>
					</div>
							</div>
						</a>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-f726cfb elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="f726cfb" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;0800a17&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-0800a17 jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(0px);"></div></div>
						<div class="elementor-container elementor-column-gap-wider">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b2b56fb" data-id="b2b56fb" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-64d8504 elementor-widget elementor-widget-heading" data-id="64d8504" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Matriz curricular</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-894beab elementor-widget elementor-widget-text-editor" data-id="894beab" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p>Conheça todos os detalhes sobre o que você irá aprender.</p>					</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-c3e7d85 elementor-widget elementor-widget-spacer" data-id="c3e7d85" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-963ca7b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="963ca7b" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="icone icone-clock-streamline-time"></i>						</span>
										<span class="elementor-icon-list-text">3.204 horas/aula</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-3e59eed elementor-widget elementor-widget-text-editor" data-id="3e59eed" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p>O valor da hora-aula corresponde ao tempo de duração efetivo da aula, que é de 50 minutos.</p>					</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-68dc7f8 elementor-widget elementor-widget-spacer" data-id="68dc7f8" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-ee3aef7 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-button" data-id="ee3aef7" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">Baixar matriz</span>
		</span>
					</a>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-663317c" data-id="663317c" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-9177243 elementor-widget elementor-widget-spacer" data-id="9177243" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-58086d5 elementor-widget elementor-widget-heading" data-id="58086d5" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Diurno</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-9a38eca elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="9a38eca" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-927a68a elementor-widget elementor-widget-accordion" data-id="927a68a" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion" role="tablist">
							<div class="elementor-accordion-item">
					<h5 id="elementor-tab-title-1531" class="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-1531" aria-expanded="false" tabindex="-1" aria-selected="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-minus"></i></span>
														</span>
												<a class="elementor-accordion-title" href="">1º ano</a>
					</h5>
					<div id="elementor-tab-content-1531" class="elementor-tab-content elementor-clearfix" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1531" style="display: none;" hidden="hidden"><div><h5><span style="font-weight: bolder;">1° Semestre</span></h5></div><ul><li>Algoritmos 72 h/a</li><li>Data Base Essentials 72 h/a</li><li>Introdução à Sistemas de Informação 72 h/a</li><li>Matemática Discreta 72 h/a</li><li>Arquitetura e Organização de Computadores 72 h/a</li><li>Projeto Interdisciplinar I 36 h/a</li><li>ESPM Life Lab I 72 h/a</li></ul><div>&nbsp;</div><div><h5><span style="font-weight: bolder;">2° Semestre</span></h5></div><ul><li>Networking 72 h/a</li><li>Laboratório de Programação 72 h/a</li><li>Programação para Manipulação de Dados 72 h/a</li><li>Engenharia de Software 72 h/a</li><li>Programação Web 72 h/a</li><li>Concepção de Interfaces e Estratégia de Ux 72 h/a</li><li>Fundamentos de Marketing 72 h/a</li><li>Projeto Interdisciplinar II 36 h/a</li><li>ESPM Life Lab II 72 h/a</li></ul></div>
				</div>
							<div class="elementor-accordion-item">
					<h5 id="elementor-tab-title-1532" class="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-1532" aria-expanded="false" tabindex="-1" aria-selected="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-minus"></i></span>
														</span>
												<a class="elementor-accordion-title" href="">2º ano</a>
					</h5>
					<div id="elementor-tab-content-1532" class="elementor-tab-content elementor-clearfix" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1532" style="display: none;" hidden="hidden"><div><h5><span style="font-weight: bolder;">3° Semestre</span></h5></div><ul><li>Programação orientada a objetos 72 h/a</li><li>Estrutura de Dados 72 h/a</li><li>Modelagem de Sistemas 72 h/a</li><li>Arquitetura de Dados 72 h/a</li><li>Marketing Estratégico 72 h/a</li><li>Pensamento Contemporâneo 72 h/a</li><li>Estatística 72 h/a</li><li>Projeto interdisciplinar III 36 h/a</li><li>ESPM Life Lab III 72 h/a</li></ul><div>&nbsp;</div><div><h5><span style="font-weight: bolder;">4° Semestre</span></h5></div><ul><li>Sistemas Integrados 72 h/a</li><li>Qualidade de Software 72 h/a</li><li>Modelagem 3D 72 h/a</li><li>Programação Funcional 72 h/a</li><li>Visualização de Dados 72 h/a</li><li>Análise Exploratória 72 h/a</li><li>Fundamentos de Economia 72 h/a</li><li>Laboratório Experimental II</li><li>Projeto interdisciplinar IV 36 h/a</li><li>ESPM Life Lab IV 72 h/a</li></ul><div>&nbsp;</div></div>
				</div>
							<div class="elementor-accordion-item">
					<h5 id="elementor-tab-title-1533" class="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-1533" aria-expanded="false" tabindex="-1" aria-selected="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-minus"></i></span>
														</span>
												<a class="elementor-accordion-title" href="">3º ano</a>
					</h5>
					<div id="elementor-tab-content-1533" class="elementor-tab-content elementor-clearfix" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1533" style="display: none;" hidden="hidden"><div><h5><span style="font-weight: bolder;">5° Semestre</span></h5></div><ul><li>Gerenciamento de Projetos 72 h/a</li>
<li>Programação Mobile 72 h/a</li>
<li>Eletiva 72 h/a</li>
<li>Eletiva 72 h/a</li>
<li>ESPM Life Lab V 72 h/a</li></ul><div><br></div><div><h5><span style="font-weight: bolder;">6° Semestre</span></h5></div><ul>
<li>Segurança e Auditoria 72 h/a</li>
<li>Eletiva 72 h/a</li>
<li>Eletiva 72 h/a</li>
<li>Eletiva 72 h/a</li>
<li>ESPM Life Lab VI&nbsp; 72 h/a</li>
</ul></div>
				</div>
							<div class="elementor-accordion-item">
					<h5 id="elementor-tab-title-1534" class="elementor-tab-title" data-tab="4" role="tab" aria-controls="elementor-tab-content-1534" aria-expanded="false" tabindex="-1" aria-selected="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-minus"></i></span>
														</span>
												<a class="elementor-accordion-title" href="">4º ano</a>
					</h5>
					<div id="elementor-tab-content-1534" class="elementor-tab-content elementor-clearfix" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1534" style="display: none;" hidden="hidden"><div><h5><span style="font-weight: bolder;">7° Semestre</span></h5></div><ul><li>Gestão de TI 72 h/a</li><li>Infraestrutura Cloud72 h/a</li><li>TCC/PGT I&nbsp; 72 h/a</li><li>Eletiva 72 h/a</li></ul><div><h5><span style="font-weight: bolder;">&nbsp;</span></h5><h5><span style="font-weight: bolder;">8° Semestre</span></h5></div><ul><li>Tecnologias Emergentes 72 h/a</li><li>TCC/PGT II&nbsp; 72 h/a</li><li>Eletiva 72 h/a</li><li>Eletiva 72 h/a</li></ul></div>
				</div>
							<div class="elementor-accordion-item">
					<h5 id="elementor-tab-title-1535" class="elementor-tab-title elementor-active" data-tab="5" role="tab" aria-controls="elementor-tab-content-1535" aria-expanded="true" tabindex="0" aria-selected="true">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-minus"></i></span>
														</span>
												<a class="elementor-accordion-title" href="">Optativa</a>
					</h5>
					<div id="elementor-tab-content-1535" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="5" role="tabpanel" aria-labelledby="elementor-tab-title-1535" style="display: block;"><ul><li>Libras 36H/A</li></ul></div>
				</div>
								</div>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-83e5175 elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="83e5175" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;d277d38&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-d277d38 jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(0px);"></div></div>
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-04ead91" data-id="04ead91" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-8e6af01 elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="8e6af01" data-element_type="widget" data-widget_type="icon-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-box-wrapper">
						<div class="elementor-icon-box-content">
				<h3 class="elementor-icon-box-title">
					<span>
						Duração					</span>
				</h3>
							</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-a1ec7df elementor-widget elementor-widget-heading" data-id="a1ec7df" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">1º ao 4º semestre diurno e do 5º ao 8º noturno</p>		</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-488b03c" data-id="488b03c" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-5c02de6 elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="5c02de6" data-element_type="widget" data-widget_type="icon-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-box-wrapper">
						<div class="elementor-icon-box-content">
				<h3 class="elementor-icon-box-title">
					<span>
						Horário					</span>
				</h3>
							</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-676a7ce elementor-widget elementor-widget-heading" data-id="676a7ce" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">9h20 às 17h30<br> (1º ao 4º semestre)<br>
19h30 às 23h <br>(5º ao 8º semestre)</p>		</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d5c7a9d" data-id="d5c7a9d" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-d04d52c elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="d04d52c" data-element_type="widget" data-widget_type="icon-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-box-wrapper">
						<div class="elementor-icon-box-content">
				<h3 class="elementor-icon-box-title">
					<span>
						Mensalidade					</span>
				</h3>
							</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-2db9002 elementor-widget elementor-widget-heading" data-id="2db9002" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">R$ 4.451,00</p>		</div>
				</div>
				<div class="elementor-element elementor-element-d0a84ea elementor-widget elementor-widget-heading" data-id="d0a84ea" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Mensalidade referente ao ano letivo de 2023</p>		</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-13909c2" data-id="13909c2" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-e5f7424 elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="e5f7424" data-element_type="widget" data-widget_type="icon-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-box-wrapper">
						<div class="elementor-icon-box-content">
				<h3 class="elementor-icon-box-title">
					<span>
						Inscrições					</span>
				</h3>
									<p class="elementor-icon-box-description">
						Vestibular, ENEM ou Processos internacionais					</p>
							</div>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-84f4d18 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default jet-parallax-section" data-id="84f4d18" data-element_type="section" data-settings="{&quot;jet_parallax_layout_list&quot;:[{&quot;jet_parallax_layout_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;_id&quot;:&quot;20eea55&quot;,&quot;jet_parallax_layout_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;},&quot;jet_parallax_layout_speed&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;jet_parallax_layout_type&quot;:&quot;scroll&quot;,&quot;jet_parallax_layout_direction&quot;:null,&quot;jet_parallax_layout_fx_direction&quot;:null,&quot;jet_parallax_layout_z_index&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x&quot;:50,&quot;jet_parallax_layout_bg_x_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_x_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y&quot;:50,&quot;jet_parallax_layout_bg_y_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_y_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size&quot;:&quot;auto&quot;,&quot;jet_parallax_layout_bg_size_tablet&quot;:&quot;&quot;,&quot;jet_parallax_layout_bg_size_mobile&quot;:&quot;&quot;,&quot;jet_parallax_layout_animation_prop&quot;:&quot;transform&quot;,&quot;jet_parallax_layout_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;]}]}"><div class="jet-parallax-section__layout elementor-repeater-item-20eea55 jet-parallax-section__scroll-layout"><div class="jet-parallax-section__image" style="background-position: 50% 50%; background-image: url(&quot;&quot;); transform: translateY(0px);"></div></div>
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34a7933" data-id="34a7933" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-8e4dfa7 elementor-widget elementor-widget-heading" data-id="8e4dfa7" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Professores inspiradores</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-cd6ee8e elementor-widget elementor-widget-text-editor" data-id="cd6ee8e" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p>Aqui você aprende com os melhores profissionais do mercado.</p>					</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-66061e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="66061e4" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-1d35936 elementor-widget elementor-widget-testimonial" data-id="1d35936" data-element_type="widget" data-widget_type="testimonial.default">
				<div class="elementor-widget-container">
					<div class="elementor-testimonial-wrapper">
			
						<div class="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
				<div class="elementor-testimonial-meta-inner">
											<div class="elementor-testimonial-image">
							<img decoding="async" width="400" height="400" src="https://www.espm.br/wp-content/uploads/flavio-marques-azevedo-1.jpg" class="attachment-full size-full entered lazyloaded" alt="flavio marques azevedo 1" title="Sistemas de Informação ESPM 8" data-lazy-src="https://www.espm.br/wp-content/uploads/flavio-marques-azevedo-1.jpg" data-ll-status="loaded"><noscript><img decoding="async" width="400" height="400" src="https://www.espm.br/wp-content/uploads/flavio-marques-azevedo-1.jpg" class="attachment-full size-full" alt="flavio marques azevedo 1" title="Sistemas de Informação ESPM 8"></noscript>						</div>
					
										<div class="elementor-testimonial-details">
														<div class="elementor-testimonial-name">Flavio Marques Azevedo</div>
																						<div class="elementor-testimonial-job">Coordenador do curso</div>
													</div>
									</div>
			</div>
					</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-92a031d elementor-widget elementor-widget-spacer" data-id="92a031d" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-8509461 elementor-align-center elementor-widget elementor-widget-button" data-id="8509461" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a href="/category/professores/prof-graduacao/?jsf=jet-engine&amp;meta=professor-unidade!is_custom_checkbox:São%20Paulo&amp;tax=category:261" class="elementor-button-link elementor-button elementor-size-md" role="button">
						<span class="elementor-button-content-wrapper">
							<span class="elementor-button-icon elementor-align-icon-left">
				<i aria-hidden="true" class="icone icone-study"></i>			</span>
						<span class="elementor-button-text">Professores do curso</span>
		</span>
					</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-04943a2 elementor-widget elementor-widget-spacer" data-id="04943a2" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
							</div>
				</div>
		<p></p></div>
							</div>
  `

  return {
    props: {
      cover:
        'https://img.imageboss.me/revista-cdn/cdn/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136',

      gameInfo: {
        title: 'Engenharia de Software',
        price: '30.00',
        description:
          'A tecnologia está ao nosso redor, em cada detalhe. E, em meio a tanta inovação, são necessários profissionais que consigam integrar conhecimento tecnológico, comportamento humano, gestão e desenvolvimento de negócios. Assim são os profissionais de Sistemas de Informação formados aqui na ESPM. Um profissional diferenciado e mais completo, líder nato, alinhado às tendências tecnológicas, com competências e habilidades extras que superam o que costuma ser esperado de um formado em curso tradicional de Sistemas de Informação. É um profissional formado em tecnologia com DNA ESPM.'
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: {
        developer: 'Different Tales',
        releaseDate: '2020-11-21T23:00:00',
        platforms: ['windows', 'mac', 'linux'],
        publisher: 'Walkabout',
        rating: 'BR0',
        genres: ['Role-playing']
      },
      upcommingCursos: cursoMock,
      upcommingHighlight: HighlightMock,
      recommendedCursos: cursoMock
    }
  }
}
