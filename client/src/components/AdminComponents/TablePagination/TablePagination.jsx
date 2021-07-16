import { pageNumbers } from './TablePaginationLogic';
import {
	PaginationBox,
	PaginationList,
	PageButton,
} from './TablePagination.styles';

const Pagination = ({ totalPages, paginate }) => {
	return (
		<PaginationBox>
			<PaginationList>
				{pageNumbers(totalPages).map((number) => (
					<li key={number}>
						<PageButton onClick={() => paginate(number)}>
							{number + 1}
						</PageButton>
					</li>
				))}
			</PaginationList>
		</PaginationBox>
	);
};

export default Pagination;
