<template>
	<li class="custom-timeline-item inview">
		<div class="custom-timeline-icon">
			<slot name="icon"></slot>
		</div>
		<div class="custom-timeline-info">
			<header class="custom-timeline-heading">
				<div class="custom-timeline-time">
					<slot name="time"></slot>
				</div>
				<div class="custom-timeline-title">
					<slot name="title"></slot>
				</div>
			</header>
			<div class="custom-timeline-content">
				<slot name="content"></slot>
			</div>
		</div>
    </li>
</template>