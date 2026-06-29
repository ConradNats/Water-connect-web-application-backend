/**
 * Standard API response formatter
 */

const successResponse = (data, message = 'Success', statusCode = 200) => {
  return {
    statusCode,
    body: {
      success: true,
      message,
      data,
    },
  };
};

const errorResponse = (message = 'Error', errorCode = 'INTERNAL_ERROR', statusCode = 500, details = null) => {
  return {
    statusCode,
    body: {
      success: false,
      message,
      error: errorCode,
      ...(details && { details }),
    },
  };
};

const paginatedResponse = (data, currentPage, pageSize, total, message = 'Success', statusCode = 200) => {
  const totalPages = Math.ceil(total / pageSize);

  return {
    statusCode,
    body: {
      success: true,
      message,
      data,
      pagination: {
        currentPage,
        pageSize,
        totalPages,
        total,
      },
    },
  };
};

module.exports = {
  successResponse,
  errorResponse,
  paginatedResponse,
};
