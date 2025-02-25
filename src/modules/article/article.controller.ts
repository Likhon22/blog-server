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
  const articles = await articleServices.getAllArticlesFromDB();
  sendResponse(res, {
    data: articles,
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

const articleControllers = {
  createArticles,
  getArticles,
  getSingleArticle,
};

export default articleControllers;
