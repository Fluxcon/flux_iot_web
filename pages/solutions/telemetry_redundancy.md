---
layout: default.njk
subtitle: Telemetry Redundancy
tags: solutions
---

<!-- Main -->
<div class="wrapper style1">
	<div class="container">
		<header class="major">
			<h2>Telemetry Redundancy via Satellite</h2>
			<p>Existing solutions typically rely on the Mobile Network Operator’s (MNO) infrastructure for connectivity.<br>
				If a network failure occurs, it may be dificult to monitor, manage and control assets.</p>
		</header>
		<div class="row gtr-150">
			<div class="col-8 col-12-medium">
				<!-- Content -->
				<section>
					<span class="image fit"><img src="/img/graph_windows.jpg" alt=""></span>
					<p>Efficient management of infrastructure has a direct impact on the bottom line. Monitoring assets over 
						multiple geographies and in remote areas can be challenging.</p>
					<p>Fluxcon is able to offer a satellite-based telemetry product, which can be added to existing solutions 
						thus creating a telemetry redundant link via satellite.</p>
					<p>Fluxcon’s redundant satellite link, can be interfaced with existing infrastructure to increase link availability, 
						allowing customers access to monitor, manage and control their assets, even when the primary communications link is down.</p>
					<h3>Business value is delivered by:</h3>
					<ul>
						<li>Increasing uptimes</li>
						<li>Higher asset utilization</li>
					</ul>
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
					<h4>Value proposition</h4>
					<small>
						<ul>
							<li>Low power unit, with internal battery (option).</li>
							<li>Innovative Technology.</li>
							<li>Remote operations, coverage of the entire African continent.</li>
							<li>To increase productivity while minimising cost, by increasing monitoring solution link availability.</li>
							<li>To monitor, manage and control infrastructure, in the event of primary communications network failure.</li>
						</ul>
					</small>
					<footer>
						<ul class="actions">
							<li><a href="/downloads/fluxcon_telemetry_redundancy.pdf" target="_blank" rel="noopener noreferer" class="button fit icon solid fa-download">Telemetry Redundancy Fact sheet</a></li>
						</ul>
					</footer>
				</section>
			</div>
		</div>
	</div>
</div>
