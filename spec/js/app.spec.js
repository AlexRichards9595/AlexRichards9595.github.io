describe('My Application', () => {
	describe('toggleMenu', () => {
		it('shows menu when menu button is clicked', () => {
			let navUl = document.createElement("ul");
			navUl.style.display = 'none';
			toggleMenu(navUl);
			expect(navUl.style.display).toEqual('flex');
		});
	});
	describe('toggleMenu', () => {
		it('hides menu when menu button is clicked', () => {
			let navUl = document.createElement("ul");
			navUl.style.display = 'flex';
			toggleMenu(navUl);
			expect(navUl.style.display).toEqual('none');
		});
	});
});