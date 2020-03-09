---
layout: default.njk
subtitle: 9602 SBD Powertray D9
tags: hardware
date: 2020-01-04
---

<!-- Main -->
<div class="wrapper style1">
	<div class="container">
		<header class="major">
			<h2>9602 SBD Powertray D9</h2>
			<p>The 9602 SBD PowerTray is designed to carry the Iridium 9602 SBD satellite transceiver. The board contains everything needed, 
				including on-board voltage regulators, RS232 level shifting and protection circuitry, to easily connect the 9602 transceiver to 
				an RS232 DTE port using a standard RS232 cable.</p>
		</header>
		<div class="row gtr-150">
			<div class="col-8 col-12-medium">
				<!-- Content -->
				<section>
					<span class="image fit"><img src="/img/powertray_d9.jpg" alt=""></span>
					<p>In addition, the 9602's RF connectors are conveniently converted to SMA female connectors.</p>
					<p>Onboard LEDs allow the power status and network availability to be observed at a glance. 
						A toggle switch is provided to control power to the unit. The input voltage can range from 6 to 35VDC, making it suitable 
						for both aircraft and vehicle systems.</p>
					<h3>Applications</h3>
						<p>Aviation, Construction, Emergency, Forestry, Tracking, Government, Maritime, Mining, Oil & Gas, Utilities.</p>
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
				</section>
				<section>
					<h4>Powertray D9 Key Features</h4>
					<small>
						<ul>
							<li>Standard RS232 interface connects directly to a PC</li>
							<li>RF connectors converted to SMA-Type1</li>
							<li>Built-in over-current protection & level conversion</li>
							<li>Compact design: 64 x 75 x 16mm (W x L x H)</li>
							<li>Toggle enable/disable 9602 transceiver</li>
							<li>Status LEDs</li>
						</ul>
					</small>
					<footer>
						<ul class="actions">
							<li><a href="/downloads/fluxcon_9602_powertray_d9.pdf" target="_blank" rel="noopener noreferer" class="button icon solid fa-download">PowerTray D9 Brochure</a></li>
						</ul>
					</footer>
				</section>
			</div>
		</div>
	</div>
</div>
