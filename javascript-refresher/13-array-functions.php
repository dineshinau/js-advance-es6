<?php
/**
 * Learning React Basic.
 */
?>
<html>
<head>
    <title>React Basic</title>
</head>
<body>
<div class="wrap">
    <h1>Working</h1>
    <script type="text/javascript">
		const myName = () => {
			console.log('Dinesh');
		};
		myName();

		const herName = (Name) => {
			console.log(Name);
		};
		herName('Gunjan');

		const hisName = Name => { //This syntax is only valid for one argument.
			console.log(Name);
		};
		hisName('Dinesh Kumar');

		const hisNameAge = (name, age) => {
			console.log(name,age);
		};
		hisNameAge('Dinesh Kumar',31);

		const multiply = number => number*9;
		console.log(multiply(4));

    </script>
</div>
</body>

</html>
