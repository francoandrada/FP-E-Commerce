import { useSelector } from 'react-redux';
import { pageNumbers } from './TablePaginationLogic';
import {
	PaginationBox,
	PaginationList,
	PageButton,
} from './TablePagination.styles';

const Pagination = ({ totalPages, paginate }) => {
	const { gotoTablePage } = useSelector((state) => state.admin);
	return (
		<PaginationBox>
			<span>
				Current Page: <strong>{gotoTablePage + 1}</strong>
			</span>
			<PaginationList>
				{pageNumbers(totalPages).map((number) => (
					
						<PageButton onClick={() => paginate(number)}>
							{number + 1}
						</PageButton>
				
				))}
			</PaginationList>
		</PaginationBox>
	);
};

export default Pagination;
