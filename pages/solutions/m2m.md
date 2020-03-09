---
layout: default.njk
subtitle: Iridium M2M
tags: solutions
---

<!-- Main -->
<div class="wrapper style1">
	<div class="container">
		<header class="major">
			<h2>Iridium M2M</h2>
			<p>Connect to a World of M2M Possibilities.</p>
		</header>
		<div class="row gtr-150">
			<div class="col-8 col-12-medium">
				<!-- Content -->
				<section>
					<span class="image fit"><img src="/img/satellite_closeup.jpg" alt=""></span>
					<p>New M2M applications are coming online every day as global businesses track, monitor and manage just-in-time inventories, 
						enterprise fleets, energy grids, remote infrastructure, emergency operations, personnel deployments, natural processes and more.</p>
					<p>The Iridium network of 66 cross-linked Low Earth Orbit (LEO) satellites offers truly global, pole-to-pole M2M service with the 
						lowest latency in the industry, using satellite connectivity to extend M2M to the 90% of the Earth not serviced by terrestrial networks.</p>
					<h3>Flexible and Easy to Work With</h3>
					<p>Iridium is easy to adapt and adopt. We are making substantial investments in our core technology, while working toward industry standardization 
						to ensure near seamless communications between terrestrial and satellite networks.</p>
					<h3>Driving M2M Innovation</h3>
					<p>By opening and licensing our technology to collaborate with an expanding set of innovators, we are the catalyst for new solutions in a wide range of M2M markets.</p>
					<h3>Core Products</h3>
					<p>Iridium core technologies are designed for ease of integration, have an increasingly small footprint, and enable access to reliable, critical data 
					connectivity anywhere on the planet.</p>
				</section>
			</div>
			<div class="col-4 col-12-medium">
				<!-- Sidebar -->
				<section>
					<h4>Solutions</h4>
					{%- if collections.solutions -%}
					<ul>
						{%- for page in collections.solutions -%}
						<li><a href="{{ page.url }}">{{ page.data.subtitle }}</a></li>
						{%- endfor -%}
					</ul>
					{%- endif -%}
				</section>
				<section>
					<h4>Iridium M2M Features</h4>
					<small>
						<ul>
							<li>100% truly global coverage</li>
							<li>Low latency; near real-time data delivery</li>
							<li>Higher transmission speeds than terrestrial networks</li>
							<li>One-price global coverage</li>
							<li>Proven performance</li>
							<li>Low-cost next generation ultra-light transceivers</li>
						</ul>
					</small>
					<footer>
						<ul class="actions">
							<li><a href="/downloads/fluxcon_iridium_m2m.pdf" target="_blank" rel="noopener noreferer" class="button fit icon solid fa-download">Iridium M2M Fact sheet</a></li>
						</ul>
					</footer>
				</section>
			</div>
		</div>
	</div>
</div>
