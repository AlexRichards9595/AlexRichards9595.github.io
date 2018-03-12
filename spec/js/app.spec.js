describe('My Application', () => {
	describe('toggleMenu', () => {
		it('shows menu when menu button is clicked', () => {
			const navUl = document.createElement("ul");
			navUl.style.visibility = 'hidden';
			toggleMenu(navUl);
			expect(navUl.style.visibility).toEqual('visible');
		});
		it('hides menu when menu button is clicked', () => {
			const navUl = document.createElement("ul");
			navUl.style.visibility = 'visible';
			toggleMenu(navUl);
			expect(navUl.style.visibility).toEqual('hidden');
		});
	});
});