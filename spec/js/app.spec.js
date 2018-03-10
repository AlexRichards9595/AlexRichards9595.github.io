describe('My Application', () => {
	describe('toggleMenu', () => {
		it('shows menu when menu button is clicked', () => {
			const navUl = document.createElement("ul");
			navUl.style.display = 'none';
			toggleMenu(navUl);
			expect(navUl.style.display).toEqual('flex');
		});
		it('hides menu when menu button is clicked', () => {
			const navUl = document.createElement("ul");
			navUl.style.display = 'flex';
			toggleMenu(navUl);
			expect(navUl.style.display).toEqual('none');
		});
	});
	describe('plusSlideNumber', () => {
		it('adds one to the slide index', () => {
			const slideIndex = 1;
			beforeTest = slideIndex;
			const afterTest = plusSlideNumber(slideIndex);
			expect(afterTest-beforeTest).toEqual(1);
		});
	});
});