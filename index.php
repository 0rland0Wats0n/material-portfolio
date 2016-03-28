<?php
 	$title = "Landing | Orlango Watson";
	include_once 'header.php';
?>

	<div id="landing-page" class="white flex-parent flex-center">
		<div class="z-depth-1 blue darken-2 landing-page-container">
			<h1 class="heading no-margin">Welcome</h1>
			<p class="muted no-margin">Enter your name here to personalize the experience.</p>
			<form class="submit-name-form" method="post">
				<div class="row">
					<div class="input-field">
						<i class="material-icons prefix white-text js-button">send</i>
						<input id="input" name="name" type="text" class="white-text">
					</div>
				</div>
			</form>
		</div>
	</div>

<?php include_once 'footer.php'; ?>
