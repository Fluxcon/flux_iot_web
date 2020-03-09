---
layout: default.njk
subtitle: Iridium Edge
tags: hardware
date: 2020-01-03
---

<!-- Main -->
<div id="main" class="wrapper style1">
	<div class="container">
		<header class="major">
			<h2>Iridium Edge</h2>
			<p>Dependable global connectivity for IoT business continuity.</p>
		</header>
		<div class="row gtr-150">
			<div class="col-8 col-12-medium">
				<!-- Content -->
				<section>
					<span class="image fit"><img src="/img/edge_dozer.jpg" alt=""></span>
					<p>Enable your customers to leverage their existing terrestrial-based solutions for fleet management, telematics, 
						safety and other remote monitoring applications through Iridium Edge™, a ready-to-go, reliable satellite communications 
						device that expands connectivity beyond cellular limits for 100% global IoT coverage.</p>
					<p>Fast time-to-market is a critical component in today’s highly competitive communications environment. Iridium Edge<sup>tm</sup> 
						is a satellite add-on enabling dual-mode capability and reducing the cost, uncertainties and complications associated with hardware development, 
						manufacture and certification of the satellitespecific terminal.</p>
				</section>
			</div>
			<div class="col-4 col-12-medium">
				<!-- Sidebar -->
				<section>
					<h4>Hardware</h4>
					{%- if collections.hardware -%}
					<ul>
						{%- for page in collections.hardware -%}
						<li><a href="{{ page.url }}">{{ page.data.subtitle }}</a></li>
						{%- endfor -%}
					</ul>
					{%- endif -%}
					<footer>
						<ul class="actions">
							<li><a href="/hardware/compare" class="button fit icon solid fa-list">Compare hardware</a></li>
						</ul>
					</footer>
				</section>
				<section>
					<h4>Iridium Edge Key Features</h4>
					<small>
						<ul>
							<li>Hardware-Ready Device for simple, low risk integration</li>
							<li>Low-Cost Device for affordable adoption</li>
							<li>Satellite Add-On for truly global coverage</li>
							<li>Ready-To-Install for quick time-to-market</li>
							<li>Robust Power Supply for industrial installations</li>
							<li>Certified in key geographic markets</li>
							<li>180° Line of Sight for compromised, partially blocked locations</li>
							<li>Iridium Short Burst Data SM (SBD SM) modem for Iridium’s superior network advantages</li>
						</ul>
					</small>
					<footer>
						<ul class="actions">
							<li><a href="/downloads/fluxcon_iridium_edge_fact_sheet.pdf" target="_blank" rel="noopener noreferer" class="button fit icon solid fa-download">Iridium Edge Fact Sheet</a></li>
						</ul>
					</footer>
				</section>
				</section>
			</div>
		</div>
	</div>
</div>
