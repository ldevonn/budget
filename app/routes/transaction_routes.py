from flask import Blueprint, request, session, jsonify
from app.models import Transaction, db


transaction_routes = Blueprint('transactions', __name__)


@transaction_routes.route('/new', methods=['POST'])
def create_transaction():
    try:
        data = request.get_json()
        print("Received data:", data)
        
        # Validate required fields
        required_fields = ['amount', 'description', 'userId']
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({
                "error": "Missing required fields",
                "missing_fields": missing_fields
            }), 400

        transaction = Transaction(
            amount=data['amount'],
            description=data['description'],
            userId=data['userId']
        )
        db.session.add(transaction)
        db.session.commit()
        return transaction.to_dict(), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            "error": "Failed to create transaction",
            "details": str(e)
        }), 500