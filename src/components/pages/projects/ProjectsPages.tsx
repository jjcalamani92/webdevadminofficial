import {
	HeadingPrimary,
	HeadingAdmin
} from '../../layouts/heading/HeadingLayouts';
import { ProjectsComponent } from './ProjectsComponent';

export const ProjectsPages = () => {
	return (
		<>
			<HeadingPrimary titleP="mis" titleS="Proyectos" />
			<HeadingAdmin title="tiendas online" titleBTN="agregar" />
			<ProjectsComponent type="ecommerce" />
		</>
	);
};
