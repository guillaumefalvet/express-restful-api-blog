BEGIN;

-- Insert categories
INSERT INTO "category" ("label", "route") VALUES
  ('Technology', 'technology'),
  ('Science', 'science'),
  ('Sports', 'sports'),
  ('Art', 'art'),
  ('Food', 'food');

-- Insert posts
INSERT INTO "post" ("slug", "title", "excerpt", "content", "category_id")
VALUES
  ('post-1', 'Post 1 Title', 'Post 1 Excerpt', 'Post 1 Content', 1),
  ('post-2', 'Post 2 Title', 'Post 2 Excerpt', 'Post 2 Content', 2),
  ('post-3', 'Post 3 Title', 'Post 3 Excerpt', 'Post 3 Content', 3),
  ('post-4', 'Post 4 Title', 'Post 4 Excerpt', 'Post 4 Content', 4),
  ('post-5', 'Post 5 Title', 'Post 5 Excerpt', 'Post 5 Content', 5),
  ('post-6', 'Post 6 Title', 'Post 6 Excerpt', 'Post 6 Content', 1),
  ('post-7', 'Post 7 Title', 'Post 7 Excerpt', 'Post 7 Content', 2),
  ('post-8', 'Post 8 Title', 'Post 8 Excerpt', 'Post 8 Content', 3),
  ('post-9', 'Post 9 Title', 'Post 9 Excerpt', 'Post 9 Content', 4),
  ('post-10', 'Post 10 Title', 'Post 10 Excerpt', 'Post 10 Content', 5),
  ('post-11', 'Post 11 Title', 'Post 11 Excerpt', 'Post 11 Content', 1),
  ('post-12', 'Post 12 Title', 'Post 12 Excerpt', 'Post 12 Content', 2),
  ('post-13', 'Post 13 Title', 'Post 13 Excerpt', 'Post 13 Content', 3),
  ('post-14', 'Post 14 Title', 'Post 14 Excerpt', 'Post 14 Content', 4),
  ('post-15', 'Post 15 Title', 'Post 15 Excerpt', 'Post 15 Content', 5),
  ('post-16', 'Post 16 Title', 'Post 16 Excerpt', 'Post 16 Content', 1),
  ('post-17', 'Post 17 Title', 'Post 17 Excerpt', 'Post 17 Content', 2),
  ('post-18', 'Post 18 Title', 'Post 18 Excerpt', 'Post 18 Content', 3),
  ('post-19', 'Post 19 Title', 'Post 19 Excerpt', 'Post 19 Content', 4),
  ('post-20', 'Post 20 Title', 'Post 20 Excerpt', 'Post 20 Content', 5);

COMMIT;