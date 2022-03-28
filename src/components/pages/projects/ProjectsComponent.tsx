import { useSelector } from 'react-redux';
import { getByType } from '../../../helpers/getByType';
import { CardProjects } from '../../layouts/card/CardProjects';

interface Props {
	About: any;
}
interface Type {
	type: String;
}

export const ProjectsComponent = ({ type }: Type) => {
	const { works } = useSelector((state: Props) => state.About);
	const work = getByType(works, type);

	return (
		<>
			<section className="portfolio">
				{work.map((data: any, i: number) => (
					<CardProjects key={i} {...data} i={i} />
				))}
			</section>
		</>
	);
};
