import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import articleServices from './article.service';

const createArticles = catchAsync(async (req, res) => {
  const articles = req.body;
  const result = await articleServices.createArticleIntoDB(articles);
  sendResponse(res, {
    data: result,
    message: 'Article created successfully',
    statusCode: 201,
    success: true,
  });
});

const getArticles = catchAsync(async (req, res) => {
  const articles = await articleServices.getAllArticlesFromDB(req.query);

  sendResponse(res, {
    data: articles.articles,
    meta: articles.meta,
    message: 'All articles fetched successfully',
    statusCode: 200,
    success: true,
  });
});

const getSingleArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const article = await articleServices.getSingleArticleFromDB(id);
  sendResponse(res, {
    data: article,
    message: 'Article fetched successfully',
    statusCode: 200,
    success: true,
  });
});

const updateArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const article = await articleServices.updateArticleFromDB(id, payload);
  sendResponse(res, {
    data: article,
    message: 'Article updated successfully',
    statusCode: 200,
    success: true,
  });
});
const deleteArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await articleServices.deleteArticleFromDB(id);
  sendResponse(res, {
    message: 'Article deleted successfully',
    statusCode: 200,
    success: true,
    data: result,
  });
});

const articleControllers = {
  createArticles,
  getArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
};

export default articleControllers;
