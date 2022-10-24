const distance = (a, b) => {
	//TODO: implementați funcția
	// TODO: implement the function
	if(a instanceof String || typeof a === 'string' || b instanceof String || typeof b ==='string')
	{
		if (!a.length) return b.length;
		else if (!b.length) return a.length;
		else if (a === b) return 0;
		else {
			const grid = [];
			for (let i = 0; i < a.length + 1; i++) {
				const row = []
				for (let j = 0; j < b.length + 1; j++) {
				row.push(j)
				}
				row[0] = i
				grid.push(row)
			}

			for (let i = 1; i < a.length + 1; i++) {
				for (let j = 1; j < b.length + 1; j++) {
				if (a[i - 1] === b[j - 1]) {
					grid[i][j] = grid[i - 1][j - 1]
				}else {
					grid[i][j] = 1 + Math.min(
						grid[i][j - 1],
						grid[i - 1][j - 1], 
						grid[i - 1][j])
				}
				}
			}
			return grid[a.length][b.length];
		}
	} else {
		throw new Error('InvalidType');
	}

}


module.exports.distance = distance