import React, { useState, useEffect } from 'react';
import { Button, Table, InputGroup, FormControl, Pagination, Row, Col, Alert } from 'react-bootstrap';
import '../css/TableComponent.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function TableComponent({ data = [], columns = [], onDelete, onEdit }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // Debounce delay of 300ms

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when rows per page changes
    };

    // Filter data by searching across all columns
    const filteredData = data.filter((item) => {
        return Object.values(item).some(
            (value) => value && value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return aValue.localeCompare(bValue) * (sortConfig.direction === 'asc' ? 1 : -1);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return (aValue - bValue) * (sortConfig.direction === 'asc' ? 1 : -1);
            } else if (aValue instanceof Date && bValue instanceof Date) {
                return (aValue - bValue) * (sortConfig.direction === 'asc' ? 1 : -1);
            }
        }
        return 0;
    });

    const paginatedData = sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const exportToCSV = () => {
        const csvRows = [];
        const headers = columns.map(col => col.label).join(',');
        csvRows.push(headers);

        paginatedData.forEach(row => {
            const rowValues = columns.map(col => row[col.key]).join(',');
            csvRows.push(rowValues);
        });

        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.csv';
        link.click();
    };

    // Handle the case where no data or columns are provided
    if (!data || !columns || columns.length === 0) {
        return <Alert variant="danger">No data or columns available.</Alert>;
    }

    return (
        <div className="container mt-5">
            {/* Header Row with Search, Rows per Page, and Export Button */}
            <Row className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Input */}
                <Col md={6} className="d-flex">
                    <InputGroup>
                        <InputGroup.Text>Search</InputGroup.Text>
                        <FormControl
                            placeholder="Search in all columns"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </Col>

                {/* Rows Per Page Dropdown and Export Button */}
                <Col md={6} className="d-flex justify-content-end align-items-center">
                    <div className="d-flex align-items-center me-3">
                        <label className="me-2">Rows Per Page: </label>
                        <select
                            className="form-select w-auto"
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>

                    <Button variant="primary" onClick={exportToCSV}>
                        Export CSV
                    </Button>
                </Col>
            </Row>

            {/* If no data is found after search */}
            {filteredData.length === 0 ? (
                <Alert variant="warning">No data found matching your search criteria.</Alert>
            ) : (
                <>
                    {/* Table with Pagination and Sorting */}
                    <div className="table-container" style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '400px' }}>
                        <Table striped bordered hover className="table-rounded">
                            <thead>
                                <tr>
                                    {columns.map((col) => (
                                        <th
                                            key={col.key}
                                            onClick={() => handleSort(col.key)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {col.label}
                                            {sortConfig.key === col.key ? (
                                                sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'
                                            ) : (
                                                ''
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((row, index) => (
                                    <tr key={index}>
                                        {columns.map((col) => {
                                            if (col.key === 'action') {
                                                return (
                                                    <td key={col.key}>
                                                        <FaEdit
                                                            onClick={() => onEdit(row.id)}
                                                            style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }}
                                                            title="Edit"
                                                        />
                                                        <FaTrashAlt
                                                            onClick={() => onDelete(row.id)}
                                                            style={{ cursor: 'pointer', color: 'red' }}
                                                            title="Delete"
                                                        />
                                                    </td>
                                                );
                                            } else {
                                                return <td key={col.key}>{row[col.key]}</td>;
                                            }
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    {/* Footer with Pagination Controls (First, Previous, Next, Last) */}
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col md={12} className="d-flex justify-content-end">
                            <Pagination>
                                {/* First Button */}
                                <Pagination.First
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 1}
                                />

                                {/* Previous Button */}
                                <Pagination.Prev
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />

                                {/* Page Numbers */}
                                {[...Array(totalPages).keys()].map((pageNumber) => (
                                    <Pagination.Item
                                        key={pageNumber + 1}
                                        active={pageNumber + 1 === currentPage}
                                        onClick={() => handlePageChange(pageNumber + 1)}
                                    >
                                        {pageNumber + 1}
                                    </Pagination.Item>
                                ))}

                                {/* Next Button */}
                                <Pagination.Next
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />

                                {/* Last Button */}
                                <Pagination.Last
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </Col>
                    </Row>
                </>
            )}
        </div>

    );
}

export default TableComponent;
