---
layout: default.njk
subtitle: 9602 SBD Powertray D15
tags: hardware
date: 2020-01-05
---

<!-- Main -->
<div class="wrapper style1">
	<div class="container">
		<header class="major">
			<h2>9602 SBD Powertray D15</h2>
			<p>The 9602 SBD PowerTray D15 is designed to carry the Iridium 9602 SBD satellite transceiver. 
				The board contains everything needed, including onboard voltage regulators, RS232 level shifting and protection circuitry, 
				to easily connect the 9602 transceiver to an RS232 DTE port.</p>
		</header>
		<div class="row gtr-150">
			<div class="col-8 col-12-medium">
				<!-- Content -->
				<section>
					<span class="image fit"><img src="/img/powertray_d15.jpg" alt=""></span>
					<p>The 9602's antenna connector is conveniently converted to an SMA female connector. Onboard LEDs allow the power status 
						and network availability to be observed at a glance. SBD ON/OFF control is provided via pin 6 to control power to the unit.</p>
					<p>Leave Open Circuit for ON (internally pulled to 3.3V) and pull to Ground to turn OFF. The input voltage range is 6 to 35VDC, 
						making it suitable for both aircraft and vehicle systems.</p>
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
					<h4>Powertray D15 Key Features</h4>
					<small>
						<ul>
							<li>RS232 + Power in one D15 interface</li>
							<li>SMA-F RF connector</li>
							<li>Built-in over-current protection and level conversion</li>
							<li>Compact design: 64 x 75 x 16mm (W x L x H)</li>
							<li>Status LEDs </li>
						</ul>
					</small>
					<footer>
						<ul class="actions">
							<li><a href="/downloads/fluxcon_9602_powertray_d15.pdf" target="_blank" rel="noopener noreferer" class="button icon solid fa-download">PowerTray D15 Brochure</a></li>
						</ul>
					</footer>
				</section>
			</div>
		</div>
	</div>
</div>
