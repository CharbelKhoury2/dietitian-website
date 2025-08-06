import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  
  // Article data (same as in Blog.tsx)
  const articles = [
    {
      id: 1,
      title: 'اختار الصحن الأفضل - حلقة ٢ من موسم ٥',
      excerpt: 'Join me in this special Arabic episode where we explore practical nutrition choices and healthy eating strategies.',
      author: 'Dr. Myriam',
      date: '2024-01-20',
      readTime: '8 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      featured: true,
      content: `
        <p>In this comprehensive guide, we'll explore evidence-based strategies for sustainable weight loss that actually work in the real world. Forget about fad diets and quick fixes – let's talk about creating lasting change.</p>
        
        <h2>Understanding the Science</h2>
        <p>Weight loss fundamentally comes down to creating a caloric deficit, but the approach matters significantly. Research shows that gradual, sustainable changes lead to better long-term outcomes than extreme restrictions.</p>
        
        <h2>Strategy 1: Focus on Whole Foods</h2>
        <p>Prioritizing whole, minimally processed foods naturally increases satiety and provides better nutrition per calorie. This includes:</p>
        <ul>
          <li>Lean proteins (chicken, fish, legumes, tofu)</li>
          <li>Complex carbohydrates (quinoa, sweet potatoes, oats)</li>
          <li>Healthy fats (avocados, nuts, olive oil)</li>
          <li>Plenty of vegetables and fruits</li>
        </ul>
        
        <h2>Strategy 2: Mindful Eating Practices</h2>
        <p>Developing awareness around eating habits can significantly impact weight management. This includes eating slowly, recognizing hunger and fullness cues, and minimizing distractions during meals.</p>
        
        <h2>Strategy 3: Regular Physical Activity</h2>
        <p>Combining cardiovascular exercise with strength training creates the optimal environment for fat loss while preserving muscle mass. Aim for at least 150 minutes of moderate-intensity exercise per week.</p>
        
        <h2>Strategy 4: Adequate Sleep and Stress Management</h2>
        <p>Poor sleep and chronic stress can significantly impact hormones that regulate hunger and metabolism. Prioritizing 7-9 hours of quality sleep and implementing stress-reduction techniques are crucial.</p>
        
        <h2>Creating Your Action Plan</h2>
        <p>Start with small, manageable changes and gradually build upon them. Focus on one strategy at a time to avoid overwhelm and increase your chances of long-term success.</p>
      `
    },
    {
      id: 3,
      title: 'Pre and Post Workout Nutrition for Endurance Athletes',
      excerpt: 'Optimize your training and recovery with targeted nutrition strategies designed for endurance sports.',
      author: 'Dr. Myriam',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      content: `
        <p>Proper nutrition timing can make or break your endurance performance. Whether you're training for a marathon, cycling event, or triathlon, what you eat before and after your workouts significantly impacts your performance and recovery.</p>
        
        <h2>Pre-Workout Nutrition (2-4 hours before)</h2>
        <p>Your pre-workout meal should focus on easily digestible carbohydrates with moderate protein and minimal fat and fiber to avoid digestive issues.</p>
        
        <h3>Ideal Pre-Workout Foods:</h3>
        <ul>
          <li>Oatmeal with banana and honey</li>
          <li>Toast with almond butter and sliced banana</li>
          <li>Greek yogurt with berries and granola</li>
          <li>Smoothie with fruit, protein powder, and oats</li>
        </ul>
        
        <h2>During Exercise (for sessions >60 minutes)</h2>
        <p>For longer training sessions, aim for 30-60g of carbohydrates per hour. This can come from:</p>
        <ul>
          <li>Sports drinks</li>
          <li>Energy gels</li>
          <li>Dates or bananas</li>
          <li>Homemade energy balls</li>
        </ul>
        
        <h2>Post-Workout Recovery (within 30-60 minutes)</h2>
        <p>The post-workout window is crucial for replenishing glycogen stores and supporting muscle recovery. Aim for a 3:1 or 4:1 ratio of carbohydrates to protein.</p>
        
        <h3>Excellent Recovery Options:</h3>
        <ul>
          <li>Chocolate milk</li>
          <li>Greek yogurt with fruit and granola</li>
          <li>Turkey and avocado wrap</li>
          <li>Recovery smoothie with protein powder and fruit</li>
        </ul>
        
        <h2>Hydration Strategy</h2>
        <p>Don't forget about hydration! Start your workout well-hydrated and aim to replace 150% of fluid losses post-exercise. Monitor your urine color as a hydration indicator.</p>
        
        <h2>Individual Considerations</h2>
        <p>Remember that nutrition needs vary based on training intensity, duration, environmental conditions, and individual tolerance. Experiment during training, never on race day!</p>
      `
    },
    {
      id: 11,
      title: 'Heart-Healthy Mediterranean Bowl Recipe',
      excerpt: 'A delicious, nutrient-packed bowl that supports cardiovascular health and tastes amazing.',
      author: 'Dr. Myriam',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: true,
      content: `
        <p>This Mediterranean-inspired bowl combines heart-healthy ingredients in a delicious, satisfying meal that's perfect for lunch or dinner. Packed with omega-3 fatty acids, fiber, and antioxidants, it's a nutritionist's dream!</p>
        
        <h2>Ingredients (Serves 2)</h2>
        
        <h3>Base:</h3>
        <ul>
          <li>1 cup cooked quinoa</li>
          <li>2 cups mixed greens (spinach, arugula, romaine)</li>
        </ul>
        
        <h3>Protein:</h3>
        <ul>
          <li>4 oz grilled salmon or chicken breast</li>
          <li>1/2 cup chickpeas, drained and rinsed</li>
        </ul>
        
        <h3>Vegetables:</h3>
        <ul>
          <li>1 cup cherry tomatoes, halved</li>
          <li>1 cucumber, diced</li>
          <li>1/2 red onion, thinly sliced</li>
          <li>1/2 cup roasted red peppers</li>
          <li>1/4 cup Kalamata olives</li>
        </ul>
        
        <h3>Healthy Fats:</h3>
        <ul>
          <li>1/2 avocado, sliced</li>
          <li>2 tbsp crumbled feta cheese</li>
          <li>2 tbsp chopped walnuts</li>
        </ul>
        
        <h3>Mediterranean Dressing:</h3>
        <ul>
          <li>3 tbsp extra virgin olive oil</li>
          <li>2 tbsp lemon juice</li>
          <li>1 tsp Dijon mustard</li>
          <li>1 clove garlic, minced</li>
          <li>1 tsp dried oregano</li>
          <li>Salt and pepper to taste</li>
        </ul>
        
        <h2>Instructions</h2>
        <ol>
          <li>Prepare the quinoa according to package directions and let cool slightly.</li>
          <li>Season and grill the salmon or chicken until cooked through.</li>
          <li>Whisk together all dressing ingredients in a small bowl.</li>
          <li>In large bowls, layer the mixed greens and quinoa.</li>
          <li>Top with grilled protein, chickpeas, and all vegetables.</li>
          <li>Add avocado slices, feta, and walnuts.</li>
          <li>Drizzle with dressing and serve immediately.</li>
        </ol>
        
        <h2>Nutritional Benefits</h2>
        <p><strong>Heart Health:</strong> The omega-3s from salmon and walnuts, plus monounsaturated fats from olive oil and avocado, support cardiovascular health.</p>
        <p><strong>Fiber Power:</strong> Quinoa, chickpeas, and vegetables provide substantial fiber for digestive health and satiety.</p>
        <p><strong>Antioxidants:</strong> Colorful vegetables and olive oil deliver powerful antioxidants that fight inflammation.</p>
        
        <h2>Meal Prep Tips</h2>
        <p>This bowl is perfect for meal prep! Cook quinoa and protein in batches, prep vegetables, and store dressing separately. Assemble just before eating for best freshness.</p>
        
        <h2>Variations</h2>
        <ul>
          <li>Swap salmon for grilled shrimp or tofu</li>
          <li>Use brown rice or farro instead of quinoa</li>
          <li>Add roasted vegetables like zucchini or eggplant</li>
          <li>Try different herbs like fresh basil or parsley</li>
        </ul>
      `
    },
    {
      id: 12,
      title: 'Understanding Food Labels: A Dietitian\'s Guide',
      excerpt: 'Learn to decode nutrition labels and make informed choices at the grocery store.',
      author: 'Dr. Myriam',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'weight-loss',
      image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg',
      content: `
        <p>Navigating the grocery store can feel overwhelming with countless products claiming to be "healthy," "natural," or "low-fat." As a registered dietitian, I'm here to help you decode food labels and make informed choices for you and your family.</p>
        
        <h2>Start with the Ingredient List</h2>
        <p>The ingredient list is often more important than the nutrition facts panel. Ingredients are listed by weight, from most to least. Here's what to look for:</p>
        
        <h3>Red Flags:</h3>
        <ul>
          <li>Long lists with unpronounceable ingredients</li>
          <li>Added sugars in the first few ingredients</li>
          <li>Multiple forms of sugar (corn syrup, dextrose, sucrose)</li>
          <li>Trans fats (partially hydrogenated oils)</li>
          <li>Excessive sodium or preservatives</li>
        </ul>
        
        <h3>Green Lights:</h3>
        <ul>
          <li>Short, recognizable ingredient lists</li>
          <li>Whole grains listed first</li>
          <li>Real fruits and vegetables</li>
          <li>Minimal added sugars</li>
        </ul>
        
        <h2>Decoding the Nutrition Facts Panel</h2>
        
        <h3>Serving Size</h3>
        <p>Always check the serving size first! Many packages contain multiple servings, so you'll need to multiply the nutrition information accordingly.</p>
        
        <h3>Calories</h3>
        <p>Consider calories in context of your daily needs and the food's nutritional value. 100 calories from nuts provides different benefits than 100 calories from candy.</p>
        
        <h3>Key Nutrients to Monitor:</h3>
        <ul>
          <li><strong>Saturated Fat:</strong> Limit to less than 10% of daily calories</li>
          <li><strong>Sodium:</strong> Aim for less than 2,300mg per day</li>
          <li><strong>Added Sugars:</strong> Keep under 25g (women) or 36g (men) daily</li>
          <li><strong>Fiber:</strong> Look for at least 3g per serving</li>
          <li><strong>Protein:</strong> Varies by individual needs</li>
        </ul>
        
        <h2>Understanding Health Claims</h2>
        
        <h3>Regulated Claims:</h3>
        <ul>
          <li><strong>"Low-fat":</strong> 3g or less per serving</li>
          <li><strong>"Low-sodium":</strong> 140mg or less per serving</li>
          <li><strong>"High-fiber":</strong> 5g or more per serving</li>
          <li><strong>"Good source":</strong> 10-19% Daily Value of a nutrient</li>
        </ul>
        
        <h3>Marketing Terms (Not Regulated):</h3>
        <ul>
          <li>"Natural" - doesn't mean healthy or organic</li>
          <li>"Made with real fruit" - could be minimal amounts</li>
          <li>"Multigrain" - doesn't guarantee whole grains</li>
        </ul>
        
        <h2>Smart Shopping Strategies</h2>
        
        <h3>The 5-Ingredient Rule</h3>
        <p>When possible, choose products with 5 or fewer ingredients that you can pronounce and recognize.</p>
        
        <h3>Compare Similar Products</h3>
        <p>Use the nutrition facts to compare similar items. Look at per-serving amounts, not just package totals.</p>
        
        <h3>Don't Fall for Front-of-Package Marketing</h3>
        <p>Flip the package and read the actual nutrition information rather than relying on front-of-package claims.</p>
        
        <h2>Special Considerations</h2>
        
        <h3>Organic vs. Conventional</h3>
        <p>Organic doesn't automatically mean healthier. An organic cookie is still a cookie! Focus on the overall nutritional profile.</p>
        
        <h3>Gluten-Free Products</h3>
        <p>Unless you have celiac disease or gluten sensitivity, gluten-free products aren't necessarily healthier and may be higher in sugar or fat.</p>
        
        <h2>Your Action Plan</h2>
        <p>Start small! Pick one category of food you buy regularly and begin comparing labels. Over time, you'll develop the skills to quickly identify nutritious options that fit your lifestyle and budget.</p>
        
        <p>Remember: the goal isn't perfection, but making informed choices that support your health goals. When in doubt, choose whole, minimally processed foods whenever possible.</p>
      `
    },
    {
      id: 13,
      title: 'Anti-Inflammatory Foods for Chronic Disease Prevention',
      excerpt: 'Discover powerful foods that can help reduce inflammation and support overall health.',
      author: 'Dr. Myriam',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'medical',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      content: `
        <p>Chronic inflammation is at the root of many serious health conditions, including heart disease, diabetes, arthritis, and certain cancers. The good news? Your diet can be a powerful tool in fighting inflammation and reducing your risk of chronic disease.</p>
        
        <h2>Understanding Inflammation</h2>
        <p>Acute inflammation is your body's natural healing response to injury or infection. However, chronic inflammation occurs when this response doesn't shut off, leading to tissue damage and disease over time.</p>
        
        <h3>Common Triggers of Chronic Inflammation:</h3>
        <ul>
          <li>Processed foods high in sugar and trans fats</li>
          <li>Excessive alcohol consumption</li>
          <li>Chronic stress</li>
          <li>Lack of sleep</li>
          <li>Sedentary lifestyle</li>
          <li>Environmental toxins</li>
        </ul>
        
        <h2>Top Anti-Inflammatory Foods</h2>
        
        <h3>Fatty Fish</h3>
        <p>Rich in omega-3 fatty acids (EPA and DHA), which are potent anti-inflammatory compounds.</p>
        <ul>
          <li>Salmon</li>
          <li>Mackerel</li>
          <li>Sardines</li>
          <li>Anchovies</li>
        </ul>
        <p><em>Aim for 2-3 servings per week</em></p>
        
        <h3>Colorful Berries</h3>
        <p>Packed with anthocyanins and other antioxidants that combat oxidative stress.</p>
        <ul>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Blackberries</li>
          <li>Cherries</li>
        </ul>
        
        <h3>Leafy Greens</h3>
        <p>High in vitamins A, C, E, and K, plus folate and antioxidants.</p>
        <ul>
          <li>Spinach</li>
          <li>Kale</li>
          <li>Swiss chard</li>
          <li>Arugula</li>
        </ul>
        
        <h3>Nuts and Seeds</h3>
        <p>Provide healthy fats, vitamin E, and magnesium.</p>
        <ul>
          <li>Walnuts (especially high in omega-3s)</li>
          <li>Almonds</li>
          <li>Flaxseeds</li>
          <li>Chia seeds</li>
        </ul>
        
        <h3>Spices and Herbs</h3>
        <p>Many contain powerful anti-inflammatory compounds.</p>
        <ul>
          <li><strong>Turmeric:</strong> Contains curcumin, a potent anti-inflammatory</li>
          <li><strong>Ginger:</strong> Reduces inflammatory markers</li>
          <li><strong>Garlic:</strong> Contains sulfur compounds with anti-inflammatory effects</li>
          <li><strong>Cinnamon:</strong> May help reduce inflammation and blood sugar</li>
        </ul>
        
        <h3>Extra Virgin Olive Oil</h3>
        <p>Rich in oleic acid and antioxidants, particularly oleocanthal, which has similar effects to ibuprofen.</p>
        
        <h3>Green Tea</h3>
        <p>Contains EGCG (epigallocatechin gallate), a powerful antioxidant with anti-inflammatory properties.</p>
        
        <h2>Foods to Limit or Avoid</h2>
        
        <h3>Pro-Inflammatory Foods:</h3>
        <ul>
          <li>Refined sugars and high-fructose corn syrup</li>
          <li>Trans fats and excessive omega-6 oils</li>
          <li>Processed meats</li>
          <li>Refined carbohydrates (white bread, pastries)</li>
          <li>Excessive alcohol</li>
          <li>Foods high in AGEs (advanced glycation end products)</li>
        </ul>
        
        <h2>The Mediterranean Diet Advantage</h2>
        <p>Research consistently shows that Mediterranean-style eating patterns are among the most anti-inflammatory. This approach emphasizes:</p>
        <ul>
          <li>Abundant fruits and vegetables</li>
          <li>Whole grains</li>
          <li>Legumes and nuts</li>
          <li>Olive oil as primary fat source</li>
          <li>Moderate fish consumption</li>
          <li>Limited red meat and processed foods</li>
        </ul>
        
        <h2>Practical Implementation</h2>
        
        <h3>Daily Goals:</h3>
        <ul>
          <li>Include 2-3 servings of colorful fruits and vegetables at each meal</li>
          <li>Add a handful of nuts or seeds daily</li>
          <li>Use herbs and spices liberally</li>
          <li>Choose whole grains over refined options</li>
          <li>Include fatty fish 2-3 times per week</li>
        </ul>
        
        <h3>Sample Anti-Inflammatory Day:</h3>
        <p><strong>Breakfast:</strong> Greek yogurt with berries, walnuts, and cinnamon</p>
        <p><strong>Lunch:</strong> Spinach salad with salmon, avocado, and olive oil dressing</p>
        <p><strong>Snack:</strong> Green tea with a small handful of almonds</p>
        <p><strong>Dinner:</strong> Turmeric-spiced lentils with roasted vegetables</p>
        
        <h2>Beyond Diet</h2>
        <p>While nutrition is crucial, remember that lifestyle factors also impact inflammation:</p>
        <ul>
          <li>Regular physical activity</li>
          <li>Adequate sleep (7-9 hours)</li>
          <li>Stress management</li>
          <li>Maintaining a healthy weight</li>
          <li>Not smoking</li>
        </ul>
        
        <h2>The Bottom Line</h2>
        <p>Adopting an anti-inflammatory eating pattern isn't about perfection—it's about making consistent, informed choices that support your long-term health. Start with small changes and gradually build a sustainable approach that works for your lifestyle.</p>
        
        <p>Remember to consult with your healthcare provider before making significant dietary changes, especially if you have existing health conditions or take medications.</p>
      `
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'weight-loss', name: 'Weight Management' },
    { id: 'medical', name: 'Medical Nutrition' },
    { id: 'sports', name: 'Sports Nutrition' },
    { id: 'recipes', name: 'Healthy Recipes' },
    { id: 'videos', name: 'Video Content' }
  ];

  const article = articles.find(a => a.id === parseInt(id || ''));
  
  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const categoryName = categories.find(cat => cat.id === article.category)?.name || article.category;

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          
          <div className="mb-6">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {categoryName}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-charcoal-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-charcoal-600">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-poppins prose-headings:text-charcoal-900
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-charcoal-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-charcoal-700 prose-li:mb-2
                prose-ol:text-charcoal-700
                prose-strong:text-charcoal-900
                prose-em:text-sage-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-charcoal-900 mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/resources/${relatedArticle.id}`}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-ivory-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {categoryName}
                        </span>
                      </div>
                      <h3 className="font-poppins font-semibold text-charcoal-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-charcoal-600 text-sm mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-charcoal-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          
          {articles.filter(a => a.id !== article.id && a.category === article.category).length === 0 && (
            <div className="text-center">
              <p className="text-charcoal-600 mb-6">No related articles found in this category.</p>
              <Link to="/resources">
                <Button>Browse All Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-charcoal-900 mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-charcoal-600 mb-8">
            Get personalized nutrition guidance tailored to your unique needs and goals.
          </p>
          <Link to="/book-consultation">
            <Button size="lg" className="mr-4">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="outline" size="lg">
              Read More Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}