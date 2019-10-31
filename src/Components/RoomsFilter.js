import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// get all the unique values from room
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	// console.log(context);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	let types = getUnique(rooms, 'type');
	types = ['all', ...types];
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	return (
		<>
			<section className="filter-container">
				<Title title="Search Rooms" />
				<form action="" className="filter-form">
					{/* select type */}
					<div className="form-group">
						<label htmlFor="type">room Type</label>
						<select
							name="type"
							id="type"
							value={type}
							className="form-control"
							onChange={handleChange}>
							{types}
						</select>
					</div>
					{/* end select type */}

					{/*  guests */}
					<div className="form-group">
						<label htmlFor="capacity">Guests</label>
						<select
							name="capacity"
							id="capacity"
							value={capacity}
							className="form-control"
							onChange={handleChange}>
							{people}
						</select>
					</div>
					{/* end gusts  */}
					{/* start room price  */}
					<div className="form-group">
						<label htmlFor="price">Room Price ${price}</label>
						<input
							type="range"
							name="price"
							min={minPrice}
							max={maxPrice}
							id="price"
							value={price}
							onChange={handleChange}
							className="form-control"
						/>
					</div>
					{/* end room price */}
					{/* start size  */}
					<div className="form-group">
						<label htmlFor="size">Room Size</label>
						<div className="size-inputs">
							<input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
							<input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
						</div>
					</div>
					{/* end of size  */}
					{/* extra  */}
					<div className="form-group">
						<div className="single-extra">
							<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
							<label htmlFor="breakfast">Breakfast</label>
						</div>
						<div className="single-extra">
							<input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
							<label htmlFor="pets">Pets</label>
						</div>
						</div>
					{/* end extra */}
				</form>
			</section>
		</>
	);
};

export default RoomsFilter;
