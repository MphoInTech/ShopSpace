from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.config import Config
import openai
from datetime import datetime
import json

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

openai.api_key = app.config['OPENAI_API_KEY']

@app.route('/api/analyze-business', methods=['POST'])
def analyze_business():
    try:
        data = request.json
        business_type = data.get('businessType')
        location = data.get('location')
        budget = data.get('budget')
        
        # Create prompt for GPT analysis
        prompt = f"""Analyze the following business opportunity:
        Business Type: {business_type}
        Location: {location}
        Budget: ${budget}
        
        Provide a detailed analysis including:
        1. Market potential
        2. Key success factors
        3. Initial setup requirements
        4. Estimated ROI
        5. Potential risks
        6. Recommendations"""
        
        response = openai.ChatCompletion.create(
            model=app.config['GPT_MODEL'],
            messages=[
                {"role": "system", "content": "You are an experienced business advisor with expertise in market analysis and business planning."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=app.config['MAX_TOKENS']
        )
        
        analysis = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'analysis': analysis,
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/market-trends', methods=['GET'])
def get_market_trends():
    try:
        industry = request.args.get('industry', '')
        # Here you would integrate with market data APIs
        # For now, returning mock data
        trends = {
            'marketGrowth': '5.2%',
            'competitorCount': 150,
            'averageRevenue': '$500,000',
            'successRate': '65%',
            'trends': [
                'Digital transformation',
                'Sustainability focus',
                'Remote services',
                'Personalization'
            ]
        }
        return jsonify(trends)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])
