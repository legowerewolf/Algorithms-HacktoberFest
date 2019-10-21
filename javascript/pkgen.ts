// Given an array of existing primary keys, find the lowest possible positive key not already taken. This snippet is in active use in my Discord bot (legowerewolf/discordbot.ts)

export default function pkgen(primaryKeys: Array<number>): number {
		return primaryKeys.reduce((accum, curr) => {
			return accum == curr ? curr + 1 : accum;
		}, 1);
	}
